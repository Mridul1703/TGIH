import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import GroundListing from "./Components/GroundListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SportsListing from "./Components/SportsListing";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Hero />
            <Faq />
            <SportsListing />
            <Footer />
          </Route>

          <Route exact path="/stadiums">
            <Navbar />
            <GroundListing />
            <Footer />
          </Route>

          <Route exact path="/fire">
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="*">
            <Navbar />
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
