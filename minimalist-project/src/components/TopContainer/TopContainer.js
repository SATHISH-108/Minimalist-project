import React from "react";
import "./TopContainer.css";
import Navbar from "../Navbar/Navbar";
export default function TopContainer() {
  return (
    <div className="top-container">
      <Navbar />
      <div className="content-container">
        <p className="top-container-paragraph">
          The choice is yours. Because they don’t have one.
        </p>
        <button className="top-container-button">QUICK VIEW</button>
      </div>
    </div>
  );
}
