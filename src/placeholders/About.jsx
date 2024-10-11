import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          At Dr. Hoffman Medical Services, communication is key. We invite your
          questions and tailor our care to your individual needs. From annual
          check-ups to managing complex health issues, we're here to guide you
          through your healthcare journey.
        </p>
        <p>
          Our practice combines advanced technology with compassionate care. We
          use a complete Electronic Health Record system, ensuring your medical
          information is always accessible and secure. This allows for efficient
          medication refills, comprehensive documentation, and quick response
          times for lab results.
        </p>
      </section>

      <section className="doctor-section">
        <div className="doctor-image">
          <img src="/media/drHoffman.png" alt="Dr. Edward Hoffman" />
        </div>
        <div className="doctor-info">
          <h2>Dr. Edward Hoffman, MD</h2>
          <p>
            Las Vegas Resident since 1974, Dr. Hoffman has been self-employed in
            the private practice of medicine for over 37 years. With extensive
            experience in Family Medicine, Dr. Hoffman has held key positions at
            various hospitals and clinics, focusing on providing comprehensive,
            patient-centered care.
          </p>
          <div className="doctor-highlights">
            <div className="highlight-item">
              <i className="fas fa-user-md"></i>
              <span>37+ years of experience</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-hospital"></i>
              <span>Former Chief of Family Practice</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-heartbeat"></i>
              <span>Preventive Medicine Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="additional-info">
        <h2>Professional Background</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            <ul>
              <li>Temple University (1964-1968)</li>
              <li>
                Philadelphia College of Osteopathic Medicine (1968-1972,
                graduated 20th/125)
              </li>
              <li>
                Medical Internship and 1 year Internal Medicine (1972-1974)
              </li>
            </ul>
          </div>
          <div className="info-card">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Academic / Teaching
            </h3>
            <ul>
              <li>
                National Speaker on Health and Fitness at the American Academy
                of Bariatric Physicians (2003)
              </li>
              <li>
                Medical Advisory committee member and substitute teacher -
                Northwest Health Careers School (2000-present)
              </li>
            </ul>
          </div>
          <div className="info-card">
            <h3>
              <i className="fas fa-briefcase-medical"></i> Additional
              Professional Medical Positions
            </h3>
            <ul>
              <li>
                Assisted DR Nathaniel Tippit MD in medical coverage of Bally's
                Grand Hotel (1980-1985)
              </li>
              <li>On call Physician for Travelmed</li>
              <li>Chief Medical officer MGM Medical Clinic</li>
              <li>
                Medical Consultant for Republic services occupational health
                clinic (2001-2003)
              </li>
              <li>
                Medical Director for Frias Transportation Company (2007-present)
              </li>
              <li>
                Medical director for Yellow checker Cab Company (2008-present)
              </li>
              <li>Associate Medical Director Integrity Home Health Care</li>
              <li>Medical supervisor Star Laser Tattoo removal</li>
              <li>Physician on call panel for Wynn Resorts Las Vegas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="additional-info">
        <h2>Community Involvement</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>
              <i className="fas fa-hands-helping"></i> Community Service
              Activities
            </h3>
            <ul>
              <li>Supporter Catholic Youth Charities</li>
              <li>Supporter contributor to Chabad of Summerlin</li>
              <li>Cultural preservation programs</li>
              <li>Supporter of Spirit Therapies</li>
              <li>Supporter of Make a Wish foundation</li>
              <li>Supporter of children with terminal illness</li>
              <li>
                Supporter of St Jude Children's Research Hospital in Memphis
                Tennessee
              </li>
            </ul>
          </div>
          <div className="info-card">
            <h3>
              <i className="fas fa-users"></i> Memberships
            </h3>
            <ul>
              <li>Association of Physicians for Responsible Medicine</li>
              <li>Greater Las Vegas Association of Realtors</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>
              <i className="fas fa-running"></i> Other Activities
            </h3>
            <ul>
              <li>Las Vegas Track Club 20 year member</li>
              <li>
                Las Vegas Triathlon Club 10 year member – nationally age group
                ranked 2007
              </li>
              <li>Member of Aish Hatorah Young Israel</li>
              <li>Supporter of Chabad of Summerlin</li>
              <li>Active real estate license- ASF realty broker</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
