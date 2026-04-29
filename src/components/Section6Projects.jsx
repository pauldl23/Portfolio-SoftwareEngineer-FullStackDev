import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Wedding Invitation\nand ',
    titleAccent: 'RSVP Website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    description: 'A custom wedding website developed for a client using HTML, CSS, JavaScript, and Python, featuring a personalized domain, RSVP integration with Google Sheets, Google Maps integration for venue location, and full website deployment for a seamless guest experience.',
    image: 'page-sections/otherassets/wedding.png',
    link: 'https://priyataha.com',
    hasImage: true,
  },
  {
    id: 2,
    num: '02',
    title: 'ParkAlisto',
    titleAccent: '',
    tags: ['FLUTTER', 'DART', 'FIREBASE', 'WEB ADMIN'],
    description: 'Smart parking management system with a Flutter mobile app and web-based admin dashboard for bookings, QR passes, and real-time parking operations.',
    capabilities: [
      'Includes parking search, vehicle-type selection, booking records, QR-based entry passes, reservation tracking, and admin-side transaction monitoring.'
    ],
    supportingLine: 'Preview shows the mobile app on emulator with the admin dashboard for real-time parking flow management.',
    loginNote: {
      type: 'demo',
      label: 'Demo Access',
      email: 'pauldeleon2303@gmail.com',
      password: '2200338'
    },
    image: '',
    video: 'page-sections/otherassets/parkalistoMobile.mp4',
    link: 'https://appetize.io/app/b_46ojsnntu2jaf5cne6mtc22ocq',
    hasImage: false,
    hasVideo: true,
  },
  {
    id: 3,
    num: '03',
    title: 'Baskety-',
    titleAccent: 'POS',
    tags: ['DJANGO', 'SUPABASE', 'POS', 'INVENTORY', 'TAILWIND', 'HTML', 'JAVASCRIPT'],
    description: 'Mini Mart management and POS system with inventory tracking, barcode-ready products, low-stock alerts, cashier sales flow, analytics dashboard, and role-based store operations.',
    image: 'page-sections/otherassets/basket.png',
    link: 'https://baskety-pos.onrender.com',
    hasImage: true,
    loginNote: 'Use username: admin password: admin123',
  },
  {
    id: 4,
    num: '04',
    title: 'Interactive Charity\n',
    titleAccent: 'Landing Page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Framer Motion'],
    description: ' A simple yet highly interactive website built using HTML, CSS, and JavaScript, designed to showcase charity causes and advocacy campaigns in the Philippines through an engaging and user-friendly interface.',
    image: 'page-sections/otherassets/karapatan.png',
    link: 'https://pauldl23.github.io/Website_Landing_Page/',
    hasImage: true,
  },
  {
    id: 5,
    num: '05',
    title: 'HandyGear\n',
    titleAccent: 'Inventory System',
    tags: ['PHP', 'BOOTSTRAP', 'SQL', 'INFINITYFREE'],
    description: 'Warehouse inventory and management system built with PHP, HTML, CSS, and Bootstrap, featuring dashboard monitoring, stock control, user administration, supplier and warehouse modules, and SQL-backed record handling.',
    capabilities: [
      'Built with a local SQL database in phpMyAdmin with 24+ tables, then deployed using InfinityFree website hosting.'
    ],
    supportingLine: 'Includes dashboard overview, inventory records, user management, activity logs, suppliers, warehouses, and structured database operations.',
    loginNote: {
      type: 'demo',
      label: 'Demo access',
      email: 'johndoe',
      password: 'password123'
    },
    image: 'page-sections/otherassets/handygear.png',
    link: 'https://warehouse-inventory-system.great-site.net/login',
    hasImage: true,
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

const Section6Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < projects.length - 1) {
        return prev + 1;
      }
      return prev;
    });
    setDirection(1);
    setIsPlaying(false);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    setDirection(-1);
    setIsPlaying(false);
  }, []);

  const goToSlide = useCallback((i) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
    setIsPlaying(false); // Reset video state on slide change
  }, [currentIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

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
            WEB AND SYSTEM DEVELOPMENT
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
                  <span className="proj-accent">{current.titleAccent}</span>
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

                {current.capabilities && (
                  <motion.ul
                    className="project-capabilities-list"
                    initial="hidden"
                    animate="visible"
                    custom={2.5}
                    variants={textReveal}
                  >
                    {current.capabilities.map((cap, i) => (
                      <li key={i} className="capability-item">
                        <span className="cap-dot"></span>
                        {cap}
                      </li>
                    ))}
                  </motion.ul>
                )}

                {current.supportingLine && (
                  <motion.p
                    className="project-supporting-line"
                    initial="hidden"
                    animate="visible"
                    custom={2.8}
                    variants={textReveal}
                  >
                    {current.supportingLine}
                  </motion.p>
                )}

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

                  {current.loginNote && (
                    <motion.div
                      className="login-note-container"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <svg className="login-note-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <div className="login-note-content">
                        {typeof current.loginNote === 'object' ? (
                          <>
                            <span className="login-demo-label">{current.loginNote.label || 'Demo access'}:</span>
                            <span className="login-note-text"><span className="login-muted">email:</span> {current.loginNote.email}</span>
                            <span className="login-note-text"><span className="login-muted">password:</span> {current.loginNote.password}</span>
                          </>
                        ) : (
                          <p className="login-note-text">{current.loginNote}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
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
                    {current.hasVideo ? (
                      <div className="video-player-container">
                        <video
                          ref={videoRef}
                          src={current.video}
                          className="project-video"
                          loop
                          playsInline
                          onClick={togglePlay}
                        />
                        {!isPlaying && (
                          <div className="play-button-overlay" onClick={togglePlay}>
                            <div className="play-icon-circle">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 6L17 12L7 18V6Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        )}
                        <button className="fullscreen-btn" onClick={handleFullScreen} title="Full Screen">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                          </svg>
                        </button>
                      </div>
                    ) : current.hasImage ? (
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
                            <circle cx="8.5" cy="8.5" r="1.5" fill="rgba(186,255,41,0.4)" />
                            <path d="M21 15L16 10L5 21" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="placeholder-label">Project Preview</span>
                        <span className="placeholder-sub">Image coming soon</span>
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

export default Section6Projects;

