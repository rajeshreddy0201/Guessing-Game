import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  
  return (
    <nav>
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
      <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
      <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      <Link to="/tasks" className={location.pathname === "/tasks" ? "active" : ""}>Task List</Link>
    </nav>
  );
}

export default Navbar;
