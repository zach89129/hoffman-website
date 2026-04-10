"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "../styles/Header.css";

type HeaderProps = {
  hashNavigate: (fragment: string) => void;
};

export default function Header({ hashNavigate }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionNav = (sectionId: string, event: React.MouseEvent) => {
    if (!isHome) return;
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      hashNavigate(`#${sectionId}`);
    }
    closeMenu();
  };

  const handleLogoClick = (event: React.MouseEvent) => {
    if (!isHome) return;
    event.preventDefault();
    document.getElementById("home-section")?.scrollIntoView({
      behavior: "smooth",
    });
    hashNavigate("#home-section");
    closeMenu();
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link
          href="/"
          className="logo"
          onClick={isHome ? handleLogoClick : undefined}
        >
          Dr. Hoffman Medical
        </Link>
        <button type="button" className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {isHome ? (
            <>
              <a href="#home-section" onClick={(e) => handleSectionNav("home-section", e)}>
                Home
              </a>
              <a
                href="#services-section"
                onClick={(e) => handleSectionNav("services-section", e)}
              >
                Services
              </a>
              <a
                href="#about-section"
                onClick={(e) => handleSectionNav("about-section", e)}
              >
                The Doctor
              </a>
              <a
                href="#contact-section"
                onClick={(e) => handleSectionNav("contact-section", e)}
              >
                Contact Us
              </a>
            </>
          ) : (
            <>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/#services-section" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/#about-section" onClick={closeMenu}>
                The Doctor
              </Link>
              <Link href="/#contact-section" onClick={closeMenu}>
                Contact Us
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
