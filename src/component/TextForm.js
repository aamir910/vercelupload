import React , {useState} from 'react'



export default function TextForm(props) {

   const  handleOnClick  = ()=>{
              
      let upper = text.toUpperCase() ; 
      settext(upper) ; 
      
             

            }
            const  handleOnupper  = ()=>{
              
              let upper = text.toLowerCase() ; 
              settext(upper) ; 
              
                     
        
                    }
                    const  handlespaces  = ()=>{
              
                      let upper = text.split(/[ ]+/); 
                      settext(upper.join(" ")) ; 
                    }
                      
                             
                
                      const  removespaces  = ()=>{
              
                        
                        settext("") ; 
                        
                              
                  
                              }
                            
    const[text , settext ] = useState("your text will be ")  ;  

  const handletextarea =(event)=>
  {
    settext(event.target.value) ; 
         
  }


  return (
    <>
  
    <div className='container  '  style =  {{color :props.mode === 'light'? 'black': 'white'} }>
      <div className="mb-3">


<label htmlFor="mybox" className="form-label"><h1>ENTER THE WORDS HERE</h1> </label>
  <textarea type="email" className="form-control" id="box" value={text}  style =  {{backgroundColor :props.mode === 'light'? 'white': '#1d4989'  , color :props.mode === 'light'? 'black': 'white'}  }
  onChange = {handletextarea} placeholder={props.holdertxt} rows="10" />
</div>
<button type="button" className="btn btn-primary" onClick={handleOnClick}>convert to Uppercase</button>

<button type="button" className="btn btn-primary m-2"  onClick={handleOnupper}>convert to lowercase</button>

<button type="button" className="btn btn-primary m-2 " onClick={handlespaces}>removextraspace </button>

<button type="button" className="btn btn-primary m-2 " onClick={removespaces}>Clear  </button>

    </div>
     <div className='container' style =  {{color :props.mode === 'light'? 'black': 'white'}}   > 
      <h1>
        TEXT SUMMMARY 
      </h1>
    <p>
      {text.split(" ").length-1} words and {text.length} characters 
    </p>
     </div>
    
  </>
  )
}
