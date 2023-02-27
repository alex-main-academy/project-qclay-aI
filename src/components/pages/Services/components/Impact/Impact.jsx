import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import Media from 'react-media';
import css from './Impact.module.scss';
import tennisVideo from '../../video/tennis.mp4';
import tennisMobileVideo from '../../video/tennis-mob.mp4';

const textAnimation = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: {
      delay: 1.4,
      duration: document.body.clientWidth > 767 ? 1.4 : 2,
    },
  },
};

const Impact = () => {
  const isVisibleSelector = useSelector(state => state.isElementVisible);
  const [isRender, setIsRender] = useState(false);
  const [screen, setScreen] = useState(null);
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.01,
    triggerOnce: false,
  });

  useEffect(() => {
    if (document.body.clientWidth > 1123) {
      setScreen({
        top: 80,
        firstTimer: 2000,
        secondTimer: 4000,
        minusTop: 80,
      });
    } else if (
      document.body.clientWidth < 1123 &&
      document.body.clientWidth > 767
    ) {
      setScreen({
        top: 0,
        firstTimer: 2000,
        secondTimer: 4000,
        minusTop: 190,
      });
    } else if (document.body.clientWidth < 767) {
      setScreen({
        top: 50,
        firstTimer: 2500,
        secondTimer: 4500,
        minusTop: 228,
      });
    }
  }, []);

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
          top: sectionElement.clientHeight - screen.minusTop,
        });
      }, screen.firstTimer);

      setTimeout(() => {
        window.scrollBy({ behavior: 'smooth', top: window.innerHeight });
      }, screen.secondTimer);
    } else {
      setIsRender(false);
    }
  }, [inView, isVisibleSelector, screen]);

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
              <div className={css.impact__border}></div>
              {isRender && (
                <video autoPlay muted loop className={css.impact__video}>
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
