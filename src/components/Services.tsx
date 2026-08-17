"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "../styles/Services.css";
type ServicesProps = {
  urlHash: string;
};

export default function Services({ urlHash }: ServicesProps) {
  const generalRef = useRef<HTMLElement | null>(null);
  const specializedTestingRef = useRef<HTMLElement | null>(null);
  const dotRef = useRef<HTMLElement | null>(null);
  const immigrationRef = useRef<HTMLElement | null>(null);
  const peptidesRef = useRef<HTMLElement | null>(null);
  const wellnessRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!urlHash) return;
    const key = urlHash.slice(1);
    const targetRef = {
      concierge: generalRef,
      "dot-physicals": dotRef,
      "immigration-physicals": immigrationRef,
      "specialized-testing": specializedTestingRef,
      "peptides-and-longevity": peptidesRef,
    }[key];

    if (targetRef?.current) {
      setTimeout(() => {
        const yOffset = -80;
        const y =
          targetRef.current!.getBoundingClientRect().top +
          window.scrollY +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, [urlHash]);

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <p className="services-intro">
        Dr. Hoffman and his staff provide personal service because every patient
        is important. Dr. Edward Hoffman has over 40 years of clinical
        experience and averages more than 50 hours of continuing medical
        education to make sure he is always up to date with current practices
        (only 35 hours are required). His diplomas from Harvard are on display
        in his office to give patients the utmost confidence in their care.
      </p>

      <section ref={generalRef} id="concierge" className="service-section">
        <h3>
          <i className="fas fa-user-md"></i> Concierge Medical Services
        </h3>
        <p className="service-lead">
          The majority of health concerns can and should be taken care of by
          your family physician. We fully assess-symptoms, diagnosis, staging,
          treatment, prognosis, and follow-up, and are able to coordinate your
          care with the best specialists available, should the need arise. The
          following is a brief list of some of our Concierge Medical Services.
          Please ask if you do not see a service listed or have any questions.
        </p>
        <ul>
          <li>Same day appointments</li>
          <li>24/7 access to your doctor</li>
          <li>In-Office blood work and EKG</li>
          <li>Assistance with scheduling procedures</li>
          <li>
            Assistance with arranging consultations with specialists when needed
          </li>
          <li>
            Bio-identical hormone replacement therapy for both men and women
          </li>
          <li>Lifespan consultations</li>
        </ul>
      </section>

      <section
        ref={specializedTestingRef}
        id="specialized-testing"
        className="service-section"
      >
        <h3>
          <i className="fas fa-vial"></i> Specialized Testing
        </h3>
        <p className="service-lead">
          We offer a wide range of specialized testing services to help you stay
          informed about your health and manage common health issues. Our
          services include:
        </p>
        <ul>
          <li>Polygenic Risk Scores</li>
          <li>Grail Advanced Cancer Detection</li>
          <li>Meridian Labs comprehensive food sensitivity testing</li>
          <li>Rapid Covid and Flu testing</li>
          <li>Diagnostic Solutions GI Assessment</li>
        </ul>
      </section>

      <section ref={dotRef} id="dot-physicals" className="service-section">
        <h3>
          <i className="fas fa-truck"></i> DOT Physicals
        </h3>
        <p className="service-lead">
          We provide Department of Transportation (DOT) medical examinations for
          commercial motor vehicle drivers. Our certified staff ensure that
          drivers meet the physical qualification standards set by the Federal
          Motor Carrier Safety Administration (FMCSA).
        </p>
        <p className="service-internal-link">
          <Link href="/services/dot-physicals">
            Las Vegas DOT &amp; CDL physicals — details, pricing, and hours
          </Link>
        </p>
        <ul>
          <li>Walk-in services only - Monday through Friday</li>
          <li>Please bring in a Valid ID and form of payment</li>
          <li>All paperwork will be provided by office</li>
          <li>CDL physicals are $75</li>
          <li>Class C and Taxi physicals are $60</li>
        </ul>
      </section>

      <section
        ref={immigrationRef}
        id="immigration-physicals"
        className="service-section"
      >
        <h3>
          <i className="fas fa-passport"></i> Immigration Physicals
        </h3>
        <p className="service-lead">
          Dr. Hoffman provides quick and efficient immigration physicals. Our
          friendly staff will assist with paperwork, review vaccine history, and
          collect necessary samples. We ensure all required steps are completed
          for your immigration process.
        </p>
        <p className="service-internal-link">
          <Link href="/services/immigration-physicals">
            Immigration medical exam &amp; Form I-693 in Las Vegas — schedule
            and what to bring
          </Link>
        </p>
        <ul>
          <li>Appointment only - Monday through Friday</li>
          <li>Please bring in a Passport or Valid ID</li>
          <li>
            Any Vaccine History is recommended but not required for your
            appointment
          </li>
          <li>
            I-693 Physicals are $350 which includes blood and urine analysis,
            physical exam, and required paperwork
          </li>
          <li>
            TB Test and Vaccines are NOT included however we will provide
            referrals for any outside services
          </li>
        </ul>
      </section>

      <section
        ref={peptidesRef}
        id="peptides-and-longevity"
        className="service-section"
      >
        <h3>
          <i className="fas fa-flask"></i> Peptides and Longevity
        </h3>
        <p className="service-lead">
          Dr. Hoffman has extensive knowledge and use of many peptides depending
          on a patient&apos;s needs. He has developed longevity protocols
          tailored to each individual patient based on their history and current
          lifestyle.
        </p>
        <ul>
          <li>BPC 157</li>
          <li>TB500</li>
          <li>MOTS-c</li>
          <li>and more!</li>
        </ul>
        <p>Please contact for additional details.</p>
      </section>

      <section
        ref={wellnessRef}
        id="wellness-therapies"
        className="service-section"
      >
        <h3>
          <i className="fas fa-heartbeat"></i> Additional Services
        </h3>
        <p className="service-lead">
          We offer a variety of wellness treatments for our concierge patients,
          including:
        </p>
        <ul>
          <li>Meyer&apos;s Cocktails</li>
          <li>Vitamin B12 Injections</li>
          <li>NAD Injections</li>
          <li>Weight Management Injections</li>
          <li>Allergy and Inflammation Therapy</li>
          <li>and more!</li>
        </ul>
      </section>
    </div>
  );
}
