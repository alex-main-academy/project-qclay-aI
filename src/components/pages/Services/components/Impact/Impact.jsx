import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import detect from 'detect.js';
import Media from 'react-media';
import css from './Impact.module.scss';
import tennisVideo from '../../video/tennis.mp4';
import tennisMobileVideo from '../../video/tennis-mob.mp4';

const Impact = () => {
  const isVisibleSelector = useSelector(state => state.isElementVisible);
  const [isRender, setIsRender] = useState(false);
  const [screen, setScreen] = useState(null);
  const [browser] = useState(detect.parse(navigator.userAgent));
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.01,
    triggerOnce: false,
  });

  useEffect(() => {
    if (document.body.clientWidth > 1123) {
      setScreen({
        top: 80,
        plusTop: 250,
        secondTimer: 4000,
        delay: 1.4,
      });
    } else if (
      document.body.clientWidth < 1123 &&
      document.body.clientWidth > 767
    ) {
      setScreen({
        top: 0,
        plusTop: 0,
        secondTimer: 4000,
        delay: 1.4,
      });
    } else if (document.body.clientWidth < 767) {
      setScreen({
        top: 0,
        plusTop: 200,
        secondTimer: browser.browser.family === 'Chrome Mobile' ? 4500 : 7000,
        delay: browser.browser.family === 'Chrome Mobile' ? 2.6 : 3.8,
      });
    }
  }, [browser.browser.family]);

  useEffect(() => {
    const sectionElement = document.querySelector('.impact');

    if (inView && isVisibleSelector) {
      document.body.style.overflow = 'hidden';
      setIsRender(true);
      scrollToElement(sectionElement, {
        offset: screen.top,
      });

      setTimeout(() => {
        window.scrollBy({
          behavior: 'smooth',
          top: window.innerHeight + screen.plusTop,
        });
      }, screen.secondTimer);
    } else {
      document.body.style.overflow = 'visible';
      setIsRender(false);
    }
  }, [inView, isVisibleSelector, screen]);

  const textAnimation = {
    hidden: {
      opacity: 1,
      visibility: 'visible',
    },
    visible: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        delay: screen?.delay || 1.4,
        duration: 1,
      },
    },
  };

  return (
    <section ref={ref} className="impact">
      <div className="container">
        <motion.p
          initial="hidden"
          whileInView={isRender ? 'visible' : 'hidden'}
          variants={textAnimation}
          className={css.impact__uptitle}
        >
          AI Technology
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView={isRender ? 'visible' : 'hidden'}
          variants={textAnimation}
          className={css.impact__title}
        >
          The impact of AI on the world is far-reaching and profound, changing
          the way we live, work, and interact.
        </motion.h2>
        {isRender && (
          <video autoPlay muted className={css.impact__video}>
            <source src={tennisVideo} />
          </video>
        )}
        <Media
          query="(max-width:767px)"
          render={() => (
            <>
              <motion.div
                initial="hidden"
                whileInView={isRender ? 'visible' : 'hidden'}
                variants={textAnimation}
                className={css.impact__border}
              ></motion.div>
              {isRender && (
                <video
                  playsInline
                  webkit-playsInline
                  muted
                  autoPlay
                  className={css.impact__video}
                >
                  <source src={tennisMobileVideo} />
                </video>
              )}
            </>
          )}
        />
        <motion.p
          initial="hidden"
          whileInView={isRender ? 'visible' : 'hidden'}
          variants={textAnimation}
          className={css.impact__text}
        >
          It is no longer feasible to resist the integration of AI in various
          industries, but rather to embrace and lead it in order to stay
          competitive in the modern marketplace. Those who do not adapt to this
          technology risk being left behind.
        </motion.p>
      </div>
    </section>
  );
};

export default Impact;
