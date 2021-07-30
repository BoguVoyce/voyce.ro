import React from 'react';
import About from '../components/about';
import Projects from '../components/projects'; 

const Content = () =>{
    return(
        <div className ="content" id="content">
        <About />
        <Projects />
      </div>
    )
}

export default Content;