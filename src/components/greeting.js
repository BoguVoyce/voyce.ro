import React from 'react';
import Navbar from './navbar';

const Greeting = () =>{
    return (
        <div className="card greeting">
            <div className="card-horizontal shadow-sm">
                <h4 className="card-title my-name">Hello There!</h4>
                <h5 className="card-title my-description">My Name Is Bogdan Voicescu</h5>
                <hr />
                <Navbar />
            </div>
        </div>
    )
}

export default Greeting;