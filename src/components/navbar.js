import React from 'react';

const Navbar = () =>{
    return (
    <div className="navbar">
         <nav className="nav flex">
            <a className="nav-link active" href="#content">About</a>
            <a className="nav-link" href="#education">Education</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
        </nav>
     </div>
    )
}

export default Navbar;