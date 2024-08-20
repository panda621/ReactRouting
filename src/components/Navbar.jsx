import React from 'react'
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
// .. imports go here. 
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='container-fluid pb-5'>
            <div className='d-flex justify-content-between'>
                {/**
                 * TODO:
                 * > Create a Link component that will link to the root path ("/") and display the text "Home".
                 * > Create a Link component that will link to the "/about" path and display the text "About".
                 * > Create a Link component that will link to the "/contact" path and display the text "Contact".
                 * 
                 * Reference: https://reactrouter.com/en/6.22.3/components/nav-link#navlink
                  */}
                  {/* YOUR CODE STARTS HERE */}
                <NavLink className='btn btn-primary me-3' to="/"> Home </NavLink>
                <NavLink className='btn btn-primary me-3' to="/about"> About </NavLink>
                <NavLink className='btn btn-primary me-3' to="/contact"> Contact </NavLink>
                  {/* YOUR CODE ENDS HERE */}
                  <Home/>
                  <About/>
                  <Contact/>
            </div>
        </div>
    </header>
  );
}

export default Navbar;
