import './App.css';
import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';
import SocialMedia from '../components/socialmedia'

function App() {
  return (
    <div id = "app">
      <div className ="app">
      <Header />
      <About />
      <SocialMedia />
      <Projects />
      </div>
    </div>
  );
}

export default App;
