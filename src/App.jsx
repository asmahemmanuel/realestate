import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies';
import Residencies from './components/Residences/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import "../sw";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
