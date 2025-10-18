import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header';
import Body from './components/body';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
          <header></header>
          <body></body>  
    </>
  )
}

export default App


