import React from 'react';
import Responsive from './responsive.js';
import Javascript from './javascript.js';

const Certifications = () => {
    return(
        <div className="container projects certifications">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 project-row">
                <Responsive /> 
                <Javascript />
            </div>
        </div>
    )
}
export default Certifications;