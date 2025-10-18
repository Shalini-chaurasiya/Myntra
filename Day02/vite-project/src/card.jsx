import React from "react";

function Card(props){
    return (
        
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
         <img src="https://printify.com/wp-content/uploads/2021/03/Custom-T-Shirts-UK-Printify.jpg" 
         height="230px" width="200px" />
        <div style={{textAlign:"center"}}>
             <h1>{props.cloth}</h1>
             <h1>{props.offer}</h1>
             <h1>Price :{props.price}</h1>
             <h2>Shop Now</h2>
        </div>
        </div>
         
    )
}

export default Card;