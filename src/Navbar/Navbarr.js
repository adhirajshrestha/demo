import React from 'react'
import './Navbar.css'   
const Navbarr = () => {
  return (
    <>
    <nav className="main-nav">
        <div className="main-logo"> Richard</div> 
        <div className="main-menu">
            <ul className='main-menu-desktop'>{/*main menu*/}
                <li>
                    <a href='/'  >Home</a>
                </li>

                <li>
                    <a href='/' >Work</a>
                </li>

                <li>
                    <a href='/' >About</a>
                </li>

                <li>
                    <a href='/' >Projects</a>
                </li>

                <li>
                    <a href='/' >Services</a>
                </li>
                <li className="lets-chat-desktop">
                    <a href='/'  >Let's chat</a>
                </li>

               
      
            </ul>
           
        </div>{/*Lets chat menu*/}
    </nav>
    </>
    
  )
}

export default Navbarr;
