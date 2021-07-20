import React from 'react';
import Project from './project';


const Projects = () => {
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}
export default Projects;