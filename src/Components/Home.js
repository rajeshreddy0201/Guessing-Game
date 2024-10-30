import React, { useState } from "react";
import './Home.css';

function Home() {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setAttempts(attempts + 1);
    
    if (guessNumber > targetNumber) {
      setMessage("Too high!");
    } else if (guessNumber < targetNumber) {
      setMessage("Too low!");
    } else {
      setMessage(`Correct! It took you ${attempts + 1} attempts.`);
    }
  };

  const resetGame = () => {
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div>
      <h1>Welcome to the Mystery Number Guessing Game!</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
      {message.includes("Correct") && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}

export default Home;
