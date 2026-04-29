import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'WaitStudio |\n',
    titleAccent: 'Intelligent Wait Time Modeling',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'Operational AI'],
    description: 'An enterprise-grade forecasting engine using Gradient Boosting to predict restaurant wait times and optimize staffing equilibrium based on real-time customer volume.',
    image: 'page-sections/otherassets/waitStudio.png',
    link: 'https://waiting-time-prediction-nbqxgs2btfgwpjntuvjappv.streamlit.app/',
    hasImage: true,
    colorAccent: '#00D1FF',
  },
  {
    id: 2,
    num: '02',
    title: 'VisionStudio |\n',
    titleAccent: 'Clinical Intelligence Platform',
    tags: ['Python', 'Streamlit', 'ML Engine', 'Clinical AI'],
    description: 'VisionStudio v2.4.0-Alpha is a high-performance clinical intelligence platform for eye health. It features a serialized ML Engine (92.4% accuracy) with 1.2ms latency, tracking real-time KPIs like Eye Health Index (84.6) and Ocular Drift (0.02%) via a diagnostic wavefront dashboard.',
    image: 'page-sections/otherassets/visionsstudio.png',
    link: 'https://visionstudio-vygpmccxqgkzmywwkvf5ws.streamlit.app/',
    hasImage: true,
    colorAccent: '#B9FF29',
  },
];

/* Slide container transition */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

/* Staggered text reveal */
const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* Image reveal */
const imageReveal = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const Section8DataScience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    if (currentIndex < projects.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goToSlide = useCallback((i) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  }, [currentIndex]);

  const current = projects[currentIndex];
  const progress = ((currentIndex + 1) / projects.length) * 100;

  return (
    <section className="projects-section">
      <div className="projects-container">

        {/* Top Row: Badge + Title + Counter */}
        <div className="proj-top-row">
          <div className="projects-tag-pill">
            <span className="proj-star">✦</span>
            <span className="proj-tag-text">PROJECTS</span>
          </div>

          {/* Centered Section Title */}
          <motion.div 
            className="proj-section-main-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            DATA SCIENCE / MACHINE LEARNING
          </motion.div>

          <div className="proj-slide-counter-top">
            <span className="proj-current-num">{current.num}</span>
            <span className="proj-counter-sep">/</span>
            <span className="proj-total-num">0{projects.length}</span>
          </div>
        </div>

        {/* Main Slider Area */}
        <div className="projects-slider-area">

          {/* Left-side Back Arrow (overlaid on slider) */}
          <AnimatePresence>
            {currentIndex > 0 && (
              <motion.button
                className="proj-float-arrow proj-prev-floating"
                onClick={goToPrev}
                key="prev-arrow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(186, 255, 41, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              className="project-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Left: Project Details */}
              <div className="project-details-side">
                <motion.div
                  className="proj-tech-tags"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={textReveal}
                >
                  {current.tags.map((tag) => (
                    <span key={tag} className="proj-tech-tag">{tag}</span>
                  ))}
                </motion.div>

                <motion.h2
                  className="project-title"
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={textReveal}
                >
                  {current.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < current.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                  <span className="proj-accent" style={current.colorAccent ? { color: current.colorAccent } : {}}>{current.titleAccent}</span>
                </motion.h2>

                <motion.p
                  className="project-description"
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={textReveal}
                >
                  {current.description}
                </motion.p>

                <div className="project-cta-area">
                  <motion.a
                    href={current.link}
                    className="view-project-btn-premium"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    variants={textReveal}
                    whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    VIEW PROJECT
                    <span className="btn-dot-marker"></span>
                  </motion.a>
                </div>
              </div>

              {/* Right: Project Mockup */}
              <motion.div
                className="project-mockup-side"
                initial="hidden"
                animate="visible"
                variants={imageReveal}
              >
                <div className="project-frame">
                  <div className="project-image-wrap">
                    {current.hasImage ? (
                      <img
                        src={current.image}
                        alt={current.titleAccent}
                        className="project-screenshot"
                      />
                    ) : (
                      <div className="project-placeholder">
                        <div className="placeholder-icon">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <path d="M7 17L17 7" stroke="rgba(186,255,41,0.4)" strokeWidth="2" strokeLinecap="round" />
                            <path d="M7 12L13 12" stroke="rgba(186,255,41,0.4)" strokeWidth="2" strokeLinecap="round" />
                            <path d="M7 7L10 7" stroke="rgba(186,255,41,0.4)" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span className="placeholder-label">Data Model Preview</span>
                        <span className="placeholder-sub">Charts coming soon</span>
                      </div>
                    )}
                  </div>
                  <div className="project-frame-accent"></div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right-side Next Arrow (overlaid on slider) */}
          <AnimatePresence>
            {currentIndex < projects.length - 1 && (
              <motion.button
                className="proj-float-arrow proj-next-floating"
                onClick={goToNext}
                key="next-arrow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(186, 255, 41, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>

        </div>

        {/* Bottom Controls */}
        <div className="proj-bottom-controls">
          {/* Navigation Arrows */}
          <div className="projects-nav-controls">
            <motion.button
              className={`proj-nav-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
              onClick={goToPrev}
              whileHover={currentIndex > 0 ? { scale: 1.1, borderColor: 'var(--accent-lime)' } : {}}
              whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
              disabled={currentIndex === 0}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            <motion.button
              className={`proj-nav-arrow ${currentIndex === projects.length - 1 ? 'disabled' : ''}`}
              onClick={goToNext}
              whileHover={currentIndex < projects.length - 1 ? { scale: 1.1, borderColor: 'var(--accent-lime)' } : {}}
              whileTap={currentIndex < projects.length - 1 ? { scale: 0.95 } : {}}
              disabled={currentIndex === projects.length - 1}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="proj-progress-track">
            <motion.div
              className="proj-progress-fill"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Dot Indicators */}
          <div className="proj-dots">
            {projects.map((p, i) => (
              <motion.button
                key={p.id}
                className={`proj-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Background Glow */}
      <div className="projects-bg-glow"></div>
    </section>
  );
};

export default Section8DataScience;

