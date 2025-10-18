import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(16)
      const addVal=()=>{
        setCount(count+1)
      }
       const removeVal=()=>{
        setCount(count-1)
      }
  return (
    <>
    <div className="first">
      <h1>Count is :{count}</h1>
       <button onClick={addVal}>Increase: {count}</button>
       <button onClick={removeVal}>Decrease: {count}</button>
       </div>
    </>
  )
}

export default App
