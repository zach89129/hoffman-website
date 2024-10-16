import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import homeCards from "../data/HomeCards.json";
import ReviewCarousel from "../components/ReviewCarousel";
import Services from "../components/Services";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        const heroHeight = document.getElementById(
          "background-image-parent"
        ).offsetHeight;
        if (scrollY <= heroHeight) {
          setOffset(scrollY);
        }
        if (scrollY > 0 && !hasScrolled) {
          setHasScrolled(true);
        } else if (scrollY === 0 && hasScrolled) {
          setHasScrolled(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [hasScrolled]);

  const parallaxStyle = {
    transform: `translateY(${offset * 0.3}px)`,
    transition: "transform 0.2s ease-out",
  };

  const divStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url("${process.env.PUBLIC_URL}/media/HeroImage.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const scrollToContent = () => {
    const servicesSection = document.getElementById("services-grid");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div id="home-section">
        <div id="background-image-parent">
          <div
            id="home-background-image"
            style={{ ...divStyle, ...parallaxStyle }}
          ></div>
          <div id="opening-text-parent">
            <h2 id="opening-text-header">Hoffman Medical</h2>
            <p id="opening-text-p">Exceptional Care, Exclusively for You.</p>
          </div>
          <div
            className={`scroll-indicator ${hasScrolled ? "hidden" : ""}`}
            onClick={scrollToContent}
          >
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="services-grid">
          {homeCards.map((card, index) => (
            <div
              key={index}
              className="homeCard"
              onClick={() => {
                const element = document.getElementById(card.link.slice(1));
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", `#${card.link.slice(1)}`);
                }
              }}
            >
              <div className="homeCardImgWrapper">
                <div
                  style={{
                    backgroundImage: `URL(${process.env.PUBLIC_URL}${card.icon})`,
                  }}
                  className="homeCardImg"
                />
              </div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
              <span className="click-info">Click for more info</span>
            </div>
          ))}
        </div>
      </div>
      <div id="about-section">
        <div id="about-doctor-section">
          <div className="about-doctor-container">
            <div className="about-doctor-image">
              <img
                src={`${process.env.PUBLIC_URL}/media/drHoffman.png`}
                alt="Dr. Edward Hoffman"
              />
            </div>
            <div className="about-doctor-content">
              <h2>About Dr. Edward Hoffman</h2>
              <p>
                Las Vegas Resident since 1974, Dr. Hoffman has been
                self-employed in the private practice of medicine for over 40
                years. With extensive experience in Family Medicine, Dr. Hoffman
                has held key positions at Sunrise Hospital and Mountain View
                Hospital, focusing on providing comprehensive, patient-centered
                care.
              </p>
              <div className="doctor-highlights">
                <div className="highlight-item">
                  <div className="about-icon-wrapper">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <span>40+ years of experience</span>
                </div>
                <div className="highlight-item">
                  <div className="about-icon-wrapper">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <span>Former Chief of Family Practice at HCA hospitals</span>
                </div>
                <div className="highlight-item">
                  <div className="about-icon-wrapper">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <span>Preventive Medicine Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="reviews-section">
        <ReviewCarousel />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="contact-section">
        <div id="contact-map-container">
          <div id="contact-info">
            <h2>Contact Us</h2>
            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-item-content">
                <p>Phone: (702) 243-8100</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-fax"></i>
              </div>
              <div className="contact-item-content">
                <p>Fax: (702) 360-9416</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-item-content">
                <p>
                  Email:{" "}
                  <a href="mailto:contact@drhoffmanmedical.com">
                    Send us an Email!
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-item-content">
                <p>Address: 8350 W. Sahara Ave Ste 170, Las Vegas NV 89117</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-item-content">
                <p>
                  <strong>Hours of Operation:</strong>
                </p>
                <p>Concierge Patient Services: 24/7</p>
                <p>In-Office Hours: 9am-4pm</p>
                <p>Closed 12pm-1pm for lunch</p>
                <p>Holiday Hours Vary</p>
              </div>
            </div>
          </div>
          <div id="map-container">
            <h2>Find Us</h2>
            <iframe
              title="Google Maps - Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.7256517773326!2d-115.28024068473858!3d36.14430198008756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0b5cf5e435f%3A0x2a3b0d875f0a6b11!2s8350%20W%20Sahara%20Ave%20%23170%2C%20Las%20Vegas%2C%20NV%2089117!5e0!3m2!1sen!2sus!4v1620238924595!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
