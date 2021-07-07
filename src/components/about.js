import React from 'react';
import './my-photo.jpg'; 

const About = () => {
    return(
        <div className="about">
            <h3 className="about-description">
                - I am 25 years old, I make my living as a security guard, dreaming about working in web development. 
                <br />Well I've been dreaming for the past year and a half as I was learning everything I could in the field. 
                So far I got the hang of HTML, CSS, JavaScript and React, with much more improvement to follow. 
                <br />
                <br /> - Feel free to take a look at my projects and please let me know what you think, even if you're not hiring.
            </h3>
            <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/119434971_1867484343394323_3057137243549325249_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SJXbM93k4LYAX8HRXPB&_nc_ht=scontent-otp1-1.xx&oh=d80478f29e7c23a75b6d516207b4fece&oe=60EA8121" alt="Me on a trip" className="about-photo" />
        </div>
    )
}

export default About;