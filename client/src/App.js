import React, { useState } from "react";
import "./SortingHat.css"; // Import the CSS file

function SortingHat() {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/sort", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await response.json();
    setHouse(data.house);
  };

  const handleReset = () => {
    setName("");
    setHouse("");
  };

  return (
    <div className="sorting-hat-container">
      <h1 className="title">The Sorting Hat</h1>
      <form onSubmit={handleSubmit} className="sorting-form">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          required
          className="name-input"
        />
        <button type="submit" className="submit-btn">
          Sort Me!
        </button>
      </form>
      {house && <h2 className="house-result">Welcome to {house}!</h2>}
      <button onClick={handleReset} className="reset-btn">
        Reset
      </button>
    </div>
  );
}

export default SortingHat;
