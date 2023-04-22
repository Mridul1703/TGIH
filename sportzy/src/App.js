import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import GroundListing from './Components/GroundListing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
      <Switch>
        <Route exact path='/'>
            <Navbar />
            <Hero />
            <Faq />
            <GroundListing />
            <Footer />  
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
