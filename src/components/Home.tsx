"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useHeroParallax } from "@/hooks/useHeroParallax";
import { revealClassName, useInViewOnce } from "@/hooks/useInViewOnce";
import "../styles/Home.css";
import homeCards from "../data/HomeCards.json";
import type { HomeCard } from "../types/content";
import { ServiceCard } from "./ServiceCard";
import ReviewCarousel from "./ReviewCarousel";
import Services from "./Services";

const cards = homeCards as HomeCard[];

type HomeProps = {
  urlHash: string;
  hashNavigate: (fragment: string) => void;
};

export default function Home({ urlHash, hashNavigate }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxLayerRef = useRef<HTMLDivElement>(null);
  const [cardsRef, cardsVisible] = useInViewOnce<HTMLDivElement>();
  const [aboutRef, aboutVisible] = useInViewOnce<HTMLDivElement>();
  const [reviewsRef, reviewsVisible] = useInViewOnce<HTMLDivElement>();
  const [servicesRef, servicesVisible] = useInViewOnce<HTMLDivElement>();
  const [contactRef, contactVisible] = useInViewOnce<HTMLDivElement>();

  useHeroParallax(heroRef, parallaxLayerRef);

  useEffect(() => {
    if (urlHash) {
      const element = document.getElementById(urlHash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [urlHash]);

  return (
    <div>
      <div id="home-section">
        <div id="background-image-parent" ref={heroRef}>
          <div id="home-background-image" ref={parallaxLayerRef}>
            <Image
              src="/media/HeroImage.jpg"
              alt="Hoffman Medical — concierge family medicine in Las Vegas"
              fill
              priority
              sizes="100vw"
              className="home-hero-image"
            />
          </div>
          <div id="opening-text-parent">
            <h1 id="opening-text-header">Hoffman Medical</h1>
            <p id="opening-text-p">Exceptional Care, Exclusively for You.</p>
          </div>
        </div>
        <div
          id="services-grid"
          ref={cardsRef}
          className={cardsVisible ? "is-visible" : undefined}
        >
          {cards.map((card, index) => (
            <ServiceCard
              key={index}
              card={card}
              onActivate={() => {
                const id = card.link.replace(/^#/, "");
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  hashNavigate(
                    card.link.startsWith("#") ? card.link : `#${id}`,
                  );
                }
              }}
            />
          ))}
        </div>
      </div>
      <div id="about-section" ref={aboutRef} className={revealClassName(aboutVisible)}>
        <div id="about-doctor-section">
          <div className="about-doctor-container">
            <div className="about-doctor-image">
              <div className="about-doctor-image-inner">
                <Image
                  src="/media/drHoffman.png"
                  alt="Dr. Edward Hoffman, family physician in Las Vegas"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="about-doctor-portrait"
                  priority
                />
              </div>
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
      <div
        id="reviews-section"
        ref={reviewsRef}
        className={revealClassName(reviewsVisible)}
      >
        <ReviewCarousel />
      </div>
      <div
        id="services-section"
        ref={servicesRef}
        className={revealClassName(servicesVisible)}
      >
        <Services urlHash={urlHash} />
      </div>
      <div
        id="contact-section"
        ref={contactRef}
        className={revealClassName(contactVisible)}
      >
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
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
