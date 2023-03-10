import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './Science.module.scss';
import sprite from '../../images/sprite.svg';
import titleIcon from '../../images/science/title-icon.png';
import circlesImage from '../../images/science/circle-image.png';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1 },
  }),
};

const imageAnimation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { duration: 1 },
  },
};

const borderAnimation = {
  hidden: {
    x: '-60%',
  },
  visible: {
    x: 0,
    transition: { duration: 1.5 },
  },
};

const linksAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.1 },
  }),
};

const hoverEffectAnimation = {
  initial: {
    scaleX: 1,
  },
  hover: {
    scaleX: [1.1, 1.05],
    transition: { duration: 0.5 },
  },
};

const Science = () => {
  return (
    <section className={css.science}>
      <div className="container">
        <div className={css.science__top}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className={css.science__title}
          >
            Data Science and AI product development Company
            <img
              src={titleIcon}
              alt="icon"
              width="78.5"
              className={css.science__title__icon}
            />
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textAnimation}
            className={css.science__contact}
          >
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={hoverEffectAnimation}
              className={css.science__contact__link}
            >
              <span className={css.black__span}>Contact Us</span>
              <span className={css.white__span}>Contact Us</span>
            </motion.a>
            <Link className={css.science__contact__arrow}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.science__border}
        ></motion.div>
        <p className={css.science__year}>2023</p>

        <div className={css.science__bottom}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={imageAnimation}
            src={circlesImage}
            alt="circles"
            className={css.science__circles}
          />
          <div>
            <ul className={css.science__list}>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-linkedin'}></use>
                  </svg>
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                custom={1}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-instagram'}></use>
                  </svg>
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                custom={2}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-twitter'}></use>
                  </svg>
                </Link>
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                variants={linksAnimation}
                custom={3}
                className={css.science__item}
              >
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-youtube'}></use>
                  </svg>
                </Link>
              </motion.li>
            </ul>
            <p className={css.science__text}>
              We create astounding products powered by Machine Learning and Data
              analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
