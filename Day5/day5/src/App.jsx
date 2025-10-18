import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [passWord, setPassword] = useState("ABDDJJ2D");
  const [length, setLength]=useState(10);
  const [numberChanged, setnumberChanged]= useState(false);
  const [charChanged, setcharChanged]= useState(false);
  const passwordGenerate=()=>{
             let str="abcdefghijklmnopqrstuvwxyz"
             if(numberChanged)
              str+="0123456789"
            if(charChanged)
              str += "+-)(!@#$%^&*+={}[]:;'?/><,.~`";

            let pass="";
            for(let i=0; i<length; i++){
              pass+= Math.floor(Math.random()*str.length);
            }
      setPassword(pass)
  };
 

  return (
    <>
     <h1>{passWord}</h1>
     <div  className="second">
      <input type="range" min={5} max={50} onChange={(e)=>(setLength(e.target.value))}></input>
      <label>Length is: {length}</label>

      <input type="checkBox" defaultChecked={numberChanged}  onChange={(e)=>(setnumberChanged(!numberChanged))}></input>
      <label>Number</label>
      <input type="checkBox" defaultChecked={charChanged} onChange={(e)=>(setcharChanged(!charChanged))}></input>
      <label>Character</label>
     </div>
    </>
  )
}

export default App
