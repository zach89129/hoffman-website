import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link
          to="/"
          className="logo"
          onClick={() => handleNavigation("home-section")}
        >
          Dr. Hoffman Medical
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#home-section"
            onClick={() => handleNavigation("home-section")}
          >
            Home
          </a>
          <a
            href="#services-section"
            onClick={() => handleNavigation("services-section")}
          >
            Services
          </a>
          <a
            href="#about-section"
            onClick={() => handleNavigation("about-section")}
          >
            The Doctor
          </a>
          <a
            href="#contact-section"
            onClick={() => handleNavigation("contact-section")}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
