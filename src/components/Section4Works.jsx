import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fastTransition } from '../utils/animations';

const workExperiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Self-Employed / Remote",
    date: "February 2025 - Present",
    location: "Remote",
    responsibilities: [
      "Developed and deployed responsive websites for clients using HTML, CSS, JavaScript, and PHP",
      "Collaborated with clients to gather requirements and deliver tailored web solutions",
      "Optimized website performance and improved user experience across devices",
      "Managed end-to-end development lifecycle from design to deployment",
      "Integrated RESTful APIs and backend services for client-based web applications",
      "Worked with deployment environments, backend workflows, and cloud-based hosting platforms"
    ]
  },
  {
    id: 2,
    role: "Assistant EndUser Support",
    company: "Ubiquity Global Services (Internship)",
    date: "July 2025",
    location: "Bacolod City",
    responsibilities: [
      "Provided first-level technical support to end users, resolving hardware, software, and network-related issues",
      "Assisted in troubleshooting desktops and peripheral devices",
      "Installed, configured, and updated operating systems and business applications",
      "Documented issues, solutions, and processes for knowledge base improvement",
      "Followed company IT policies, security protocols, and data protection standards"
    ]
  },
  {
    id: 3,
    role: "Video Editor / Virtual Assistant",
    company: "Cleaver Creatives",
    date: "August 2024",
    location: "Chicago, IL",
    responsibilities: [
      "Edited engaging content for various clients, including podcasts, social media reels, and branded videos.",
      "Applied motion graphics, subtitles, and creative transitions to enhance storytelling and viewer engagement."
    ]
  },
  {
    id: 4,
    role: "Video Editor / Virtual Assistant",
    company: "Coachtube",
    date: "February 2024",
    location: "Austin, Texas",
    responsibilities: [
      "Edited educational sports videos",
      "Conducted in-depth research on coaching topics and organized materials to support video content creation."
    ]
  }
];

const Section4Works = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleNextExperience = (e) => {
    e.stopPropagation();
    if (!selectedExperience) return;
    const currentIndex = workExperiences.findIndex(exp => exp.id === selectedExperience.id);
    const nextIndex = (currentIndex + 1) % workExperiences.length;
    setSelectedExperience(workExperiences[nextIndex]);
  };

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="exp-content-grid">
          <motion.div
            className="exp-text-side"
            initial={{ opacity: 0, y: 30, scale: 0.96, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={fastTransition}
            style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
          >
            <div className="exp-badge">MY EXPERIENCE</div>
            <h2 className="exp-headline">
              My Work <br />
              Experiences 🤘
            </h2>
            <p className="exp-desc-text">
              Collaborating with global brands and remote teams to deliver
              high-end visual stories and digital platforms.
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1O2hAYS4jZraRplw7YGogBhzqyxpnfyl7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="watch-resume-btn-new"
              whileHover={{ scale: 1.05 }}
              style={{ display: 'inline-flex', textDecoration: 'none' }}
            >
              WATCH RESUME
              <div className="btn-dot"></div>
            </motion.a>
          </motion.div>

          <div className="exp-list-side">
            {workExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="exp-row-premium"
                initial={{ opacity: 0, y: 20, scale: 0.96, rotateX: 6 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...fastTransition, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedExperience(exp)}
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', cursor: 'pointer' }}
              >
                <div className="exp-year-col">
                  <div className="neon-pill">{exp.date}</div>
                </div>

                <div className="exp-info-col">
                  <h3 className="exp-item-title">{exp.role}</h3>
                  <span className="exp-item-company">{exp.company}</span>
                </div>

                <div className="exp-arrow-col">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="exp-row-divider"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="exp-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fastTransition}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              className="exp-modal-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={fastTransition}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="exp-modal-desktop-close"
                onClick={() => setSelectedExperience(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="exp-modal-header">
                <div className="exp-modal-badge">{selectedExperience.date}</div>
                <h2 className="exp-modal-role">{selectedExperience.role}</h2>
                <div className="exp-modal-meta">
                  <span className="exp-modal-company">{selectedExperience.company}</span>
                  <span className="exp-modal-dot">•</span>
                  <span className="exp-modal-location">{selectedExperience.location}</span>
                </div>
              </div>

              <div className="exp-modal-body">
                <h4 className="exp-modal-section-title">KEY RESPONSIBILITIES & CONTRIBUTIONS</h4>
                <ul className="exp-modal-bullets">
                  {selectedExperience.responsibilities.map((resp, i) => (
                    <li key={i} className="exp-modal-bullet-item">
                      <span className="bullet-spark">✦</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-modal-footer-mobile">
                <button
                  className="exp-modal-btn-done"
                  onClick={() => setSelectedExperience(null)}
                >
                  DONE
                </button>
                <button
                  className="exp-modal-btn-next"
                  onClick={handleNextExperience}
                >
                  NEXT →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="exp-bg-glow"></div>
    </section>
  );
};

export default Section4Works;
