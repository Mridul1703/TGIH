import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import StadiumListing from "./Components/StadiumListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/StadiumSearch";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Hero />
            <Faq />
            <Footer />
          </Route>

          <Route exact path="/stadiums">
            <Navbar />
            <Home></Home>

            <StadiumListing />

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
