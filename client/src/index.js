import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import "./index.css";
import SortingHat from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root using createRoot
root.render(
  <React.StrictMode>
    <SortingHat />
  </React.StrictMode>
);
