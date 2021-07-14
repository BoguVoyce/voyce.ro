import React from 'react';

const NavBar = () => {
return (
    <div className="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a className="active" href="#about">About</a></li>
    </ul>
    </div>
);
}

export default NavBar;