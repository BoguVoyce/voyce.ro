import './App.css';
import PixelCity from "../components/PixelCity.mp4";
import Header from './header';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <div id = "app" >
      <video autoPlay muted loop id="myVideo" loading="eager">
        <source src={PixelCity} type="video/mp4" />
      </video>
      <Header />
      <Content />
      <Footer />
      </div>
  );
}

export default App;
