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
    <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
      <Card cloth="T-Shirt" offer="20-80%off"/>
        <Card cloth="Jeans" offer="20-50%off"/>
        <Card cloth="Frock" offer="20-60%off"/>
        <Card cloth="Kurti" offer="30-80%off"/>
        <Card cloth="T-Shirt" offer="40-80%off"/>
        <Card cloth="Jeans" offer="10-70%off"/>
        <Card cloth="T-Shirt" offer="50-60%off"/>
        <Card cloth="Saree" offer="10-80%off"/>
        <Card cloth="T-Shirt" offer="20-80%off"/>
        <Card cloth="Kurta" offer="20-70%off"/> 
               
        </div>
        <Footer />
      
    </>
  )
}

export default App
