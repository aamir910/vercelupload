

import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/alert';
import Aboutapp from './component/about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (messege  , type ) => {
     setalert( {
      messege : messege , 
      type : type  
    } );
    setTimeout(
      ()=>
      {
        setalert(null); 

      } , 2500);

  }

  const switchbutton = () => {
    if (mode === 'dark') {
      setmode('light');
      showalert("light mode enable " , "success")  ; 


      document.body.style.backgroundImage ="linear-gradient(to bottom , rgba(249,249,249,1) 100%, rgba(0,212,255,1) 100%)"
      document.title = 'textchanger-Lightmode' ; 
    }
    else {
      setmode("dark");
      showalert("dark mode enable " , "success") ; 
    
      document.body.style.backgroundImage =  "linear-gradient(to right, #051937, #004d7a, #008793, #00bf72, #a8eb12)" ;
      document.title = 'textchanger-Darkmode' ; 

    }
  }
  return (

    <>
<Router>
     

      <Navbar Title='TextChanger' About='Abouttext' mode={mode} switchbutton={switchbutton}
      />

      <Alert alert={alert} />
   
      <Switch>
<Route path='/'>
  
      <TextForm mode={mode} holdertxt="enter the text here " />

</Route>
<Route path='/about'>
  
      <Aboutapp />

</Route>


      </Switch>

      </Router>
     
    </>
  );
}

export default App;
