import React from 'react';
import foi from './foi.jpg';

const University = () => {
    return(
        <div className="col university">
          <div className="card shadow-sm project-card">
            <img className="bd-placeholder-img card-img-top" src={foi} alt="Titu Maiorescu University"/>
            <div className="card-body">
                <h5 className="card-title">Faculty Of Informatics</h5>
                 <p className="card-text">The Faculty of Informatics prepares IT and Information Technology specialists who can take on a wide range of jobs: software programmers, WEB site designers, computer system designers and network services, computer science researchers, businesses , Administration, multimedia creation offices, consultancy, computer science teachers, computer scientists, computer network administrators, database administrators.</p>
                <div className="d-flex justify-content-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://www.utm.ro/en/faculty-of-informatics/" role="button">Website</a>
                </div>
                <small className="text-muted">on Jul 30 2021</small>
              </div>
            </div>
          </div>
        </div>
    
)
}

export default University;