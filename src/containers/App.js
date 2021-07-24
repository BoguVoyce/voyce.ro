import './App.css';
import About from '../components/about';
import Projects from '../components/projects';
import SocialMedia from '../components/socialmedia'
import Navbar from '../components/navbar';
import PixelCity from "../components/PixelCity.mp4";

function App() {
  return (
    <div id = "app" >
      <video autoPlay muted loop id="myVideo">
        <source src={PixelCity} type="video/mp4" />
      </video>
      {/* <Navbar />   */}
        <div className ="app">
          <SocialMedia />
          <About />
          <Projects />
        </div>
      </div>
    
  );
}

export default App;
