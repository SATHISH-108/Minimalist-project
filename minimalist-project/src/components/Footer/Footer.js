import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-paragraph">Follow us on</p>
      <div className="social-media-container">
        <FaInstagramSquare/>
        <FaYoutube />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
    </div>
  );
}
