import React from 'react';
import myphoto from './myphoto.jpg';


const About = () => {
    return(
        <div className="card about">
            <div className="card-horizontal shadow-sm">
                <h4 className="card-title my-name">Hello There!</h4>
                <h5 className="card-title my-description">My Name Is Bogdan Voicescu</h5>
                <hr />
                <div className="card-body">
                    <div className="img-square-wrapper">
                        <img className="card-img" src={myphoto} alt="Me on a trip outdoors" />
                    </div>
                    <div className="card-text">
                        <p>- I have been studying Web Development for about 2 years now and I'm really passionate about my work. I like creating and styling websites, so far I've explored HTML, CSS, JavaScript, Bootstrap, React.js, npm and got some experience with Git, GitHub and VSCode. </p>
                        <p>- I would love to work in web development and have the opportunity to learn more.</p>
                        <p>- My studies have been slowed by my work which doesn't involve coding of any kind. Despite that, I continue to learn and look for a job that I can dedicate myself to.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;