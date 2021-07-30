import React from 'react';
import utm from './utm.jpg';

const University = () => {
    return(
        <div className="col university titu">
          <div className="card shadow-sm project-card">
            <img className="bd-placeholder-img card-img-top" src={utm} alt="Titu Maiorescu University"/>
            <div className="card-body">
                <h5 className="card-title">"Titu Maiorescu" University</h5>
                 <p className="card-text">On the 20th of September 1990, a group, mainly made up of teaching stuff members, gathered to establish, on the grounds of Law no. 21/1924, Titu Maiorescu Independent University Association. By Sentence no. 59/25 January 1991, delivered by the Law Court of district 1 Bucharest, Titu Maiorescu Independent University Association was awarded a legal personality.</p>
                <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://www.utm.ro/" role="button">Website</a>
                </div>
                <small className="text-muted">on Jul 30 2021</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default University;