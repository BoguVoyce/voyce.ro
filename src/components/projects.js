import React from 'react';
import Project from './project';
import Project2 from './project2';
import Project3 from './project3';
import Project4 from './project4';

const Projects = () => {
    return(
        <div className="projects-container">
        <div className="projects-header">
            <h4 >Projects</h4>
            <hr />
        </div>
        
            <div className="container projects" id="projects">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 project-row">
                    <Project />
                    <Project2 />
                    <Project3 />
                </div>
                <Project4 />
            </div>  
        </div>
        
    )
}
export default Projects;