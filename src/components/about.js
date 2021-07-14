import React from 'react';
import './my-photo.jpg'; 

const About = () => {
    return(
        <div className="about">
            <div className="about-description">
                <h2 className="my-name">My name is Bogdan Voicescu</h2>
                <h3 className="name-description">- Web Developer - </h3>
                <h3>
                - I am 25 years old, I make my living as a security guard, dreaming about working in web development. 
                <br />Well I've been dreaming for the past year and a half as I was learning everything I could in the field. 
                So far I got the hang of HTML, CSS, JavaScript and React, with much more improvement to follow. 
                <br />
                <br /> - Feel free to take a look at my projects and please let me know what you think, even if you're not hiring.
            </h3>
            </div>
            <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/119434971_1867484343394323_3057137243549325249_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rEU-bCNtsNIAX8IanZt&_nc_ht=scontent-otp1-1.xx&oh=965ed834fc5e884fb32c0f7d36f6fb95&oe=60F06FE1" alt="Me on a trip" className="about-photo" />
        </div>
    )
}

export default About;