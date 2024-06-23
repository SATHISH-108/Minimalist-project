import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-container">
      <h3 className="about-heading">About</h3>
      <p className="about-paragraph">
        Our products are crafted exclusively from the dreams and screams of
        young kids who wanted to show their mastery in their chosen fields, but
        were directed towards a factory for daily wages. Each cracker bursts
        brighter than their lost smiles, and can be heard louder than their
        cries for miles. Buy them, burst them, brag about them.
        <br />
        <span className="span-element">
          The choice is yours. Because they don’t have one.
        </span>
      </p>
    </div>
  );
}
