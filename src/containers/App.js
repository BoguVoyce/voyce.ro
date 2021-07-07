import './App.css';
import NavBar from '../components/navbar.js';
import Header from '../components/header';
import About from '../components/about';
import Project from '../components/project';

function App() {
  return (
    <div id = "app">
      <NavBar />
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
