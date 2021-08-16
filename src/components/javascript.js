import React from 'react';
import fcc2 from './FCC 2.bmp';

const Javascript = () => {
    return(
        <div className="col">
          <div className="card shadow-sm  project-card">
            <img className="bd-placeholder-img card-img-top" src={fcc2} alt="Rock Paper Scissors"/>
            <div className="card-body">
            <h5 className="card-title">JavaScript Algorithms and Data Structures</h5>
            <hr />
              <p className="card-text">Developer Certification, representing approximately 300 hours of coursework.</p>
              <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://www.freecodecamp.org/certification/voyce/javascript-algorithms-and-data-structures" role="button">Certification Page</a>
                </div>
                <small className="text-muted">on May 23</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default Javascript;