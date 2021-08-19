import React from 'react';
import SocialMedia from '../components/socialmedia';

const Footer = () =>{
return(
    <div id="footer-container" className="footer-container">
    <footer className="footer" id="footer">
    <div className="contact" id="contact">
    <a href="mailto:bog.voicescu@gmail.com" className="grow hover-white mail">bog.voicescu@gmail.com</a>
    <div className="contact-social"><SocialMedia /></div>
    </div>
    </footer>
    </div>
)

}

export default Footer;