import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId, event) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link
          to="/"
          className="logo"
          onClick={(e) => handleNavigation("home-section", e)}
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
            onClick={(e) => handleNavigation("home-section", e)}
          >
            Home
          </a>
          <a
            href="#services-section"
            onClick={(e) => handleNavigation("services-section", e)}
          >
            Services
          </a>
          <a
            href="#about-section"
            onClick={(e) => handleNavigation("about-section", e)}
          >
            The Doctor
          </a>
          <a
            href="#contact-section"
            onClick={(e) => handleNavigation("contact-section", e)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
