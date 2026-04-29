import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Brand Anthem\n',
    titleAccent: 'Trailer',
    tags: ['Premiere Pro', 'Final Cut', 'Color Grading'],
    description: 'A high-energy cinematic trailer for Freedom Formula, featuring dynamic motion graphics, rhythmic pacing, and advanced color grading to evoke emotion and drive engagement.',
    video: 'https://drive.google.com/file/d/1cNOlxcSeCJo1OJss4K_JisiXhWjlFhdZ/preview',
    link: '#',
    hasVideo: true,
  },
  {
    id: 2,
    num: '02',
    title: 'Visual\n',
    titleAccent: 'Ad Campaign',
    tags: ['Ad', 'Premiere Pro', 'After Effects'],
    description: 'Produced a promotional advertisement for the Coachtube website and its latest platform upgrade, highlighting new features and enhancements. Led the creative direction, scripting, and execution, incorporating motion graphics to deliver an engaging and informative visual experience.',
    video: 'https://drive.google.com/file/d/1zapH6vJ1WSihRytjNY7v0w8RR63okmPd/preview',
    link: '#',
    hasVideo: true,
  },
  {
    id: 3,
    num: '03',
    title: 'Short-Form\n',
    titleAccent: 'Content',
    tags: ['CapCut', 'Short-form Content', 'Reels / Ads'],
    description: 'Created and edited high-impact short-form videos for LinkedIn, integrating motion graphics, captions, and engaging visual elements to improve audience engagement and content performance.',
    video: 'https://drive.google.com/file/d/1-QLPmem2ciLR-417ENGu3TKjm8NFQZJu/preview',
    link: '#',
    hasVideo: true,
  },
  {
    id: 4,
    num: '04',
    title: 'Podcast\n',
    titleAccent: 'Edit',
    tags: ['After Effects', 'Keyframing', 'Visual FX'],
    description: 'A polished motion graphics project for a two-person podcast, featuring dynamic split-screen layouts, speaker-focused framing, and seamless transitions. Utilized advanced keyframing, synchronized visual effects, and animated overlays to enhance clarity, engagement, and conversational flow.',
    video: 'https://drive.google.com/file/d/1y_n0A3AGZeDgt5fYNYJdt7F8-PHBl3Pd/preview',
    link: '#',
    hasVideo: true,
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

const Section7Video = () => {
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
    setIsPlaying(false);
  }, [currentIndex]);

  const togglePlay = () => {
    setIsPlaying(true);
  };

  const handleFullScreen = () => {
    // Iframe handles its own fullscreen usually, but this is a fallback
    const iframe = document.querySelector('.project-video-iframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
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
            VIDEO EDITING
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

              </div>

              {/* Right: Project Mockup */}
              <motion.div
                className="project-mockup-side"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="project-frame">
                  <div className="project-image-wrap">
                    {current.hasVideo ? (
                      <div className="video-player-container">
                        {isPlaying ? (
                          <iframe
                            src={`${current.video}?autoplay=1`}
                            className="project-video-iframe"
                            allow="autoplay; fullscreen"
                            frameBorder="0"
                            allowFullScreen
                            title={current.titleAccent}
                          ></iframe>
                        ) : (
                          <>
                            <div className="video-poster-placeholder">
                              {/* Dark stylized backdrop */}
                              <div className="poster-gradient" />
                              <div className="poster-content">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="poster-play-hint">
                                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                  <path d="M10 8L16 12L10 16V8Z" fill="rgba(255,255,255,0.05)" />
                                </svg>
                              </div>
                            </div>

                            <div className="play-button-overlay" onClick={togglePlay}>
                              <div className="play-icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M7 6L17 12L7 18V6Z" stroke="currentColor" fill="currentColor" />
                                </svg>
                              </div>
                              <span className="play-label">WATCH PREVIEW</span>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="project-placeholder">
                        <div className="placeholder-icon">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                            <path d="M10 8L16 12L10 16V8Z" fill="rgba(186,255,41,0.4)" stroke="rgba(186,255,41,0.8)" strokeWidth="1.5" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="placeholder-label">Reel / Video Preview</span>
                        <span className="placeholder-sub">Thumbnail coming soon</span>
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

export default Section7Video;

