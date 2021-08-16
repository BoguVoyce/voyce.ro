import React from 'react';
import fcc1 from './FCC 1.bmp';
const Responsive = () => {
    return(
        <div className="col">
          <div className="card shadow-sm  project-card">
            <img className="bd-placeholder-img card-img-top" src={fcc1} alt="Rock Paper Scissors"/>
            <div className="card-body">
            <h5 className="card-title">Responsive Web Design</h5>
            <hr />
              <p className="card-text">Developer Certification, representing approximately 300 hours of coursework.</p>
              <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://www.freecodecamp.org/certification/voyce/responsive-web-design" role="button">Certification Page</a>                </div>
                <small className="text-muted">on Apr 18</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default Responsive;