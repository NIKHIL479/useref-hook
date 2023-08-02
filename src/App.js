import React,{useState,useRef} from 'react'

export const App = () => {
  const data=useRef("nikhil")
  const a=useRef(100)
  console.log(data.current);
  data.current="nick"
  const [e,sete]=useState("qw")
  return (
    <div>
      <h1>welcomess</h1><br/>
      {e}
    
      
      <h1>{data.current}</h1><br/>
      <button onClick={()=>{
        console.log('clicked');
        data.current="qwerty"
   
        
        sete(data.current)

      }}>change</button>

      <button onClick={()=>{
        a.current+=1
        console.log(a.current);
      }}> update a</button>
      {e}
      {a.current}
    </div>
  )
}
export default App