import React from 'react';

const Project4 = () => {
    return(

          <div className="card shadow-sm project-card portfolio">
            <div className="card-body">
            <h5 className="card-title">This Portfolio</h5>
              <p className="card-text">I started this project on May 1.<br /><br /> Originally built with just HTML and CSS, it had it's limitations. I started exploring React and NPM and decided to remake it with Create-react-app and later added Bootstrap as well. Learned to use Git and GitHub and I created a build version of the website that I keep in the gh-pages repository for the live preview.<br /> The Portfolio still needs some work, but I update it regularly.</p>
              <div className="d-flex justify-conten-between align-items-center card-footer">
                <div className="btn-group">
                  <a className="btn btn-sm btn-outline-secondary" href="https://github.com/bogvoicescu/voyce.ro" role="button">GitHub Repository</a>
                </div>
                <small className="text-muted">on 21 Jul</small>
              </div>
            </div>
          </div>    
)
}

export default Project4;
