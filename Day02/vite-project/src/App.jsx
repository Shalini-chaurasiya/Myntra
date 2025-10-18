import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./card";
import Header from "./Components/header";
import "./style.css";
import Footer from "./Components/footer";

function App() {
  
  return (
    <>
    <Header />
    <button className="sort">Sort by price</button>
    <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
       <Card cloth="T-Shirt" offer="20-80%off" price="200" />
        <Card cloth="Jeans" offer="20-50%off" price="500" />
        <Card cloth="Frock" offer="20-60%off" price="800" />
        <Card cloth="Kurti" offer="30-80%off" price="400" />
        <Card cloth="T-Shirt" offer="40-80%off" price="900" />
        <Card cloth="Jeans" offer="10-70%off" price="700" />
        <Card cloth="T-Shirt" offer="50-60%off" price="800" />
        <Card cloth="Saree" offer="10-80%off" price="500" />
        <Card cloth="T-Shirt" offer="20-80%off" price="900" />
        <Card cloth="Kurta" offer="20-70%off" price="3900" />
        
               
        </div>
        <Footer />
      
    </>
  )
}

export default App
