import React from 'react';
import University from './university';
import Faculty from './faculty';
import Project4 from './project4';
const Education = () => {
    return (
        <div className="education" id="education">
            <div className="education-container">
                <University />
                <Faculty />
            </div>
        </div>
    )
}

export default Education;