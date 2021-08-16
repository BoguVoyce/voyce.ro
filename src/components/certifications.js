import React from 'react';
import Responsive from './responsive.js';
import Javascript from './javascript.js';

const Certifications = () => {
    return(
        <div className="certifications">
        <h4>Certifications</h4>
        <hr />
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 g-3 project-row">
                <Responsive /> 
                <Javascript />
            </div>
        </div>
        </div>
        
    )
}
export default Certifications;