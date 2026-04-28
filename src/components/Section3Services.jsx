import React from 'react';
import { motion } from 'framer-motion';

// SVG Assets
import icon1 from '../../page-sections/section3-svg/16_icon.svg';
import icon2 from '../../page-sections/section3-svg/24_icon.svg';
import icon3 from '../../page-sections/section3-svg/8_icon.svg';

const services = [
  {
    id: "s1",
    ornament: "VIDEO • MOTION",
    icon: icon1,
    title: "Video Editing & Motion",
    desc: "From short-form reels to cinematic edits, promos, and branded content designed for engagement and storytelling."
  },
  {
    id: "s2",
    ornament: "CODE • WEB",
    icon: icon2,
    title: "Full Stack Development",
    desc: "Building responsive, scalable, and high-performance web applications with clean architecture and seamless user experience."
  },
  {
    id: "s3",
    ornament: "DATA • ANALYSIS",
    icon: icon3,
    title: "Data Analysis & Insights",
    desc: "Transforming raw data into clear dashboards, reports, and actionable insights for smarter business decisions."
  }
];

const Section3Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <header className="services-header">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-title-block"
          >
            <div className="services-badge">WHAT I OFFER</div>
            <h2 className="services-headline">
              My Premium <br />
              <span className="neon-text">Services</span>
            </h2>
          </motion.div>

          <motion.button 
            className="more-services-pill"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('[data-section="9"]');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONTACT ME
            <div className="pill-dot"></div>
          </motion.button>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="glass-service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              
              <div className="card-top-row">
                <div className="card-icon-wrap">
                  <img src={service.icon} alt={service.title} className="service-icon-img" />
                </div>
                <div className="card-title-group">
                  {service.ornament && <div className="card-ornament">{service.ornament}</div>}
                  <h3 className="card-title">{service.title}</h3>
                </div>
              </div>

              <p className="card-desc">{service.desc}</p>
              <div className="card-hover-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="services-bg-glow"></div>
    </section>
  );
};

export default Section3Services;

