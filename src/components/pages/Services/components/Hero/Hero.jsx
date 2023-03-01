import { motion } from 'framer-motion';
import Header from '../Header/Header';
import css from './Hero.module.scss';
import backVideo from '../../video/hero-back-video.mp4';
import { useEffect } from 'react';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.3 },
  }),
};

const Hero = () => {
  useEffect(() => {
    document.querySelector('.hero__video').play();
  });

  return (
    <motion.section initial="hidden" whileInView="visible" className={css.hero}>
      <video muted loop playsInline className="hero__video">
        <source src={backVideo} type="video/mp4" />
      </video>
      <Header />
      <div className="container">
        <motion.p className={css.hero__text}>
          <motion.span variants={textAnimation} custom={1}>
            The power of Data
          </motion.span>
          <motion.span variants={textAnimation} custom={2}>
            Analysis & Software
          </motion.span>
          <motion.span variants={textAnimation} custom={3}>
            Development
          </motion.span>
          <motion.span variants={textAnimation} custom={4}>
            Combined
          </motion.span>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
