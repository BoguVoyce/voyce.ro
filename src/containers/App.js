import './App.css';
import NavBar from '../components/navbar.js';
import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';

function App() {
  return (
    <div id = "app">
      <div className ="app">
      <NavBar />
      <Header />
      <About />
      <Projects />
      </div>
    </div>
  );
}

export default App;
