import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBarDemo } from "./components/ui/tubelight-navbar-demo.jsx";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBarDemo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
