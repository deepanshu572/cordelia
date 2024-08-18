import React from 'react'
import logo from '/logo.png'
import offer from '/offers.png'
const Navbar = () => {
  return (
    <>
        <div className="navbar">
             <div className="nav1">
                <img src={logo} alt="logo" />
                <svg className='nav1_svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
             </div>
             <div className="nav2">
                <a href="">
                   <img src={offer} alt="offer" />
                   <p>offers</p>
                </a>
                <a href="">
                   <p>Destination</p>
                </a>
                <a href="">
                   <p>Events</p>
                </a>
                <a href="">
                   <p>Ships</p>
                </a>
                <a href="">
                   <p>Contact</p>
                </a>
             </div>
             <div className="nav3">
                <button className='btn1'>Find a cruise</button>
                <button className='btn2'>Web check-in</button>
             </div>
             
        </div> 
    </>
  )
}

export default Navbar