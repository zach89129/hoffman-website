import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Dr. Edward Hoffman. All rights
        reserved.
      </p>
      <span id="freepik-credit">Images by Freepik.com</span>
    </footer>
  );
};

export default Footer;
