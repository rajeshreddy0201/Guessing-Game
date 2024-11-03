import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/contact";
import Tasklist from "./Components/Tasklist";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/taskList" element={<Tasklist />} />
      </Routes>
    </Router>
  );
}

export default App;

