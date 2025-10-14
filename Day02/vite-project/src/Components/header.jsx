import React from 'react'

function Header(){
    return (
        <div className="Heading">
         <img className="images" src="https://cdn.worldvectorlogo.com/logos/myntra-2.svg" height="80px" width="80px"/>
         <div className="Option">
           <button className="but">Men</button>
           <button className="but">Women</button>
           <button className="but">Kids</button>
           <button className="but">Home and Living</button>
           <button className="but">Beauty</button>
           <button className="but">Studio</button>
         </div>
         <input className="search" placeholder="Search for products brands and more"></input>
         <div className='Profile'>
            <button className="Pro">Profiles</button>
            <button className="Pro">Wishlist</button>
            <button className="Pro" >Bag</button>
         </div>
        </div>

    )
}
export default Header;
