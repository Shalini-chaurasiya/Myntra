import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/colorFull.jsx';

function App() {
  const [color, setColor] = useState("aqua");

  // useEffect to change body background color
  useEffect(() => {
    console.log("UseEffect Executed");
    document.body.style.backgroundColor = color;
  }, [color]);    //here in useEffect we add function and dependencies

  return (
    <>
      <div style={{ backgroundColor: color, minHeight: "100vh", padding: "20px" }}>
        <Main />
        <h1>Background Color Changer</h1>
        <div className="but">
          <button style={{ backgroundColor: "red", color: "white" }} onClick={() => setColor("red")}>Red</button>
          <button style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>White</button>
          <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setColor("blue")}>Blue</button>
          <button style={{ backgroundColor: "green", color: "white" }} onClick={() => setColor("green")}>Green</button>
          <button style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}>Gray</button>
          <button style={{ backgroundColor: "purple", color: "white" }} onClick={() => setColor("purple")}>Purple</button>
          <button style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
          <button style={{ backgroundColor: "black", color: "white" }} onClick={() => setColor("black")}>Black</button>
                    
          <button style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>      
    </>
  );
}
export default App;
