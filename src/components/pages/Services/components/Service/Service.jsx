import { motion } from 'framer-motion';
import css from './Service.module.scss';
import sprite from '../../images/sprite.svg';
import {
  fifthItemAnimation,
  firstItemAnimation,
  fourthItemAnimation,
  secondItemAnimation,
  seventhItemAnimation,
  sixthItemAnimation,
  thirdItemAnimation,
} from './Animation';
import Media from 'react-media';
import {
  fifthMobileItemAnimation,
  firstMobileItemAnimation,
  fourthMobileItemAnimation,
  secondMobileItemAnimation,
  seventhMobileItemAnimation,
  sixthMobileItemAnimation,
  thirdMobileItemAnimation,
} from './AnimationMobile';

const Service = () => {
  const handleLeaveItemAnimation = event => {
    const itemElement = event.target;
    itemElement.style.transitionDuration = '1200ms';
    itemElement.style.top = '-900px';
    itemElement.style.left = '-600px';
    itemElement.style.transform = 'rotate(-120deg)';
  };

  return (
    <section className={css.service}>
      <div className="container">
        <h2 className={css.service__title}>
          Services
          <span>
            <svg width="32" height="22">
              <use href={sprite + '#icon-arrow-bottom-right'}></use>
            </svg>
          </span>
        </h2>

        <div className={css.service__block}>
          <Media
            query="(min-width:768px)"
            render={() => (
              <ul className={css.service__list}>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={firstItemAnimation}
                  className={css.service__item}
                >
                  Predictive modeling
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={secondItemAnimation}
                  className={css.service__item}
                >
                  Neural Network
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={thirdItemAnimation}
                  className={css.service__item}
                >
                  Cognitive computing
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={fourthItemAnimation}
                  className={css.service__item}
                >
                  Deep learning
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  onMouseEnter={event => handleLeaveItemAnimation(event)}
                  variants={fifthItemAnimation}
                  className={css.service__item}
                >
                  Knowledge graph
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={sixthItemAnimation}
                  className={css.service__item}
                >
                  Big data analysis
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={seventhItemAnimation}
                  className={css.service__item}
                >
                  NLP
                </motion.li>
              </ul>
            )}
          />

          <Media
            query="(max-width:767px)"
            render={() => (
              <ul className={css.service__list}>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={firstMobileItemAnimation}
                  className={css.service__item}
                >
                  Predictive modeling
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={secondMobileItemAnimation}
                  className={css.service__item}
                >
                  Neural Network
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={thirdMobileItemAnimation}
                  className={css.service__item}
                >
                  Cognitive computing
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={fourthMobileItemAnimation}
                  className={css.service__item}
                >
                  Deep learning
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={fifthMobileItemAnimation}
                  className={css.service__item}
                >
                  Knowledge graph
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={sixthMobileItemAnimation}
                  className={css.service__item}
                >
                  Big data analysis
                </motion.li>
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  variants={seventhMobileItemAnimation}
                  className={css.service__item}
                >
                  NLP
                </motion.li>
              </ul>
            )}
          />

          <ul className={css.features}>
            <li className={css.features__item}>
              <span>*</span>Machine Learning
            </li>
            <li className={css.features__item}>
              <span>*</span>Natural Language Processing
            </li>
            <li className={css.features__item}>
              <span>*</span>Computer Vision
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
