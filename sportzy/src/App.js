import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Faq from './Components/Faq';
import GroundListing from './Components/GroundListing';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route>
          <Navbar />
          <Hero />
          <Faq />
          <GroundListing />
          <Footer />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
