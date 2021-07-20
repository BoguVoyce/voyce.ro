import React from 'react';
import myphoto from './myphoto.jpg';


const About = () => {
    return(
            <div className="card about">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="card-img" src={myphoto} alt="Me on a trip outdoors" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title my-name">I am Bogdan</h4>
                        <h5 className="card-title my-description">-Web Developer-</h5>
                        <p className="card-text">- I am 25 years old, I make my living as a security guard, dreaming about working in web development. 
                        <br />Well I've been dreaming for the past year and a half as I was learning everything I could in the field. 
                        So far I got the hang of HTML, CSS, JavaScript, Bootstrap, React, Git, Github, and npm with much more improvement to follow. 
                        <br /><br /> - Feel free to take a look at my projects and please let me know what you think, even if you're not hiring.
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default About;