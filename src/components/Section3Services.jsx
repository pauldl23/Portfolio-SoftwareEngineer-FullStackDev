import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "s1",
    ornament: "VIDEO • MOTION",
    icon: "/assets/section3/25_vid.png",
    title: "Video Editing",
    desc: "From short-form reels to high-end cinematic features and corporate storytelling."
  },
  {
    id: "s2",
    ornament: "CODE • WEB",
    icon: "/assets/section3/26_dev.png",
    title: "Full Stack Dev",
    desc: "Building scalable, efficient, and interactive web applications for diverse industries."
  },
  {
    id: "s3",
    ornament: "DATA • ANALYSIS",
    icon: "/assets/section3/27_data.png",
    title: "Data Analysis",
    desc: "A complete end-to-end data workflow, from extraction to insightful visualization."
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
          >
            MORE SERVICES
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
              <div className="card-ornament">{service.ornament}</div>
              <div className="card-icon-wrap">
                <img src={service.icon} alt={service.title} className="service-icon-img" />
              </div>
              <h3 className="card-title">{service.title}</h3>
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
