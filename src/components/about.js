import React from 'react';
import myphoto from './myphoto.jpg';
import Education from './education';
import Certifications from './certifications';
import Project from './project';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';

const About = () => {
    return(
        <div className="card about" id="about">
        <h4>About me</h4>
        <hr />
            <div className="card-horizontal shadow-sm">
                <div className="card-body details">
                    <div className="img-square-wrapper">
                        <img className="card-img" src={myphoto} alt="Me on a trip outdoors" />
                    </div>
                    <div className="card-text">
                        <h3>Hello! I am Bogdan.</h3>
                        <br />
                        <p>I have been studying Web Development on my own for about 2 years now and I'm really passionate about technology;</p>
                        <p>I like creating and managing websites, mainly Front-End;</p>
                        <p>I work with HTML, CSS, JavaScript and have experience with Bootstrap, React.js, npm, Git, GitHub and VSCode.</p>
                    </div>
                </div>
            </div>
            <Education />
            <Certifications />
        <div className="projects" id="projects">
            <h4>Projects</h4>
            <hr />
        </div>
            <div className="container projects" id="projects">
                <div className="row row-cols-1 row-cols-sm-2 g-3 project-row">
                    <Project />
                    <Project2 />
                    <Project3 />
                </div>
                <Project4 />
            </div>  
        </div>
    )
}

export default About;