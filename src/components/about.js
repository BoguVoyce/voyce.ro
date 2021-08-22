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
                        <p>I've been studying Web Development on my own since 2019, when I started taking the courses at FreeCodeCamp.org, experimenting with creating websites from scratch with HTML/CSS/JS, or with templates in WordPress. Now I continue to learn on Udemy.com;</p>
                        <p>This year I've been admited to the Titu Maiorescu University in Bucharest - Information Technology;</p>
                        <p>I'm confident working with HTML, CSS and JavaScript, and have experience with cPanel, React.js, WordPress, Git, GitHub, NPM and VSCode.</p>
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