import React from 'react';
import SocialMedia from '../components/socialmedia';
import Greeting from '../components/greeting';

const Header = () =>{
    return(
        <header id="header" className="header">
            <SocialMedia />
            <Greeting />
        </header>
    )
}

export default Header;