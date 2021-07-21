import React from 'react';
import etchasketch from './etchasketch.jpg';
const Project2 = () => {
    return(
        <div className="col">
          <div className="card shadow-sm  project-card">
            <img className="bd-placeholder-img card-img-top" src={etchasketch} alt="Rock Paper Scissors"/>
            <div className="card-body">
            <h5 className="card-title">Etch A Sketch</h5>
              <p className="card-text">Another simple game that I've created to study the DOM. <br />It's built with simple HTML and CSS. You can choose the size and it changes the color of the pad as you hover over it.</p>
              <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://bogvoicescu.github.io/EtchASketch/" role="button">Try It</a>
                  <a className="btn btn-sm btn-outline-secondary" href="https://github.com/bogvoicescu/EtchASketch" role="button">GitHub Repository</a>
                </div>
                <small className="text-muted">on May 25</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default Project2;
