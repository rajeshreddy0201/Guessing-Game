import React from "react";
import './About.css';

function About() {
  const showFunFact = () => {
    alert("Fun Fact: Did you know that 0 is the only real number that is neither positive nor negative?");
  };

  return (
    <div className="home-container">
      <h1>About Us</h1>
      <p>This app includes a number guessing game, a task list, and a contact form.</p>
      <button onClick={showFunFact}>Show Fun Fact</button>
    </div>
  );
}

export default About;
