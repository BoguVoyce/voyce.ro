import React from 'react';
import University from './university';
import Faculty from './faculty';

const Education = () => {
    return (
        <div className="education" id="education">
            <div className="education-container">
            <h4 className="education-header">Education</h4>
            <hr />
                <University />
                <Faculty />
            </div>
        </div>
    )
}

export default Education;