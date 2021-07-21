import React from 'react';
import backgroundchanger from './backgroundchanger.png';
const Project3 = () => {
    return(
        <div className="col">
          <div className="card shadow-sm  project-card">
            <img className="bd-placeholder-img card-img-top" src={backgroundchanger} alt="Rock Paper Scissors"/>
            <div className="card-body">
            <h5 className="card-title">CSS Background Changer</h5>
              <p className="card-text">This is a background generator, just pick two colors and it will mix them in a gradient and set them as the background.<br /> Fun thing you can add to a website.</p>
              <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://bogvoicescu.github.io/BackgroundChanger/" role="button">Try It</a>
                  <a className="btn btn-sm btn-outline-secondary" href="https://github.com/bogvoicescu/BackgroundChanger" role="button">GitHub Repository</a>
                </div>
                <small className="text-muted">on May 16</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default Project3;
