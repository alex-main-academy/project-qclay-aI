import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import css from './Blog.module.scss';
import sprite from '../../images/sprite.svg';
import dotsLottie from '../../lotties/dots_feather.json';
import handBackground from '../../images/blog/background-3.png';
import lightBackground from '../../images/blog/background-4.png';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const backgroundAnimation = {
  hidden: {
    scale: 1.2,
  },
  visible: {
    scale: 1,
    transition: { duration: 0.5 },
  },
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

const Blog = () => {
  return (
    <section className={css.blog}>
      <ul className={css.blog__list}>
        <li className={css.blog__item}>
          <h2 className={css.blog__title}>Our Blog</h2>
          <Player
            src={dotsLottie}
            autoplay
            loop
            className={css.blog__lottie}
          ></Player>
          <div className={css.blog__buttons}>
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={hoverEffectAnimation}
              type="button"
              className={css.blog__button__black}
            >
              <span className={css.black__span}>
                <svg width="29" height="20">
                  <use href={sprite + '#icon-arrow-right'}></use>
                </svg>
              </span>
              <span className={css.white__span}>
                <svg width="29" height="20">
                  <use href={sprite + '#icon-arrow-right'}></use>
                </svg>
              </span>
            </motion.button>
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={hoverEffectAnimation}
              type="button"
              className={css.blog__button__white}
            >
              <span className={css.white__span}>
                <svg width="29" height="20">
                  <use href={sprite + '#icon-arrow-right'}></use>
                </svg>
              </span>
              <span className={css.black__span}>
                <svg width="29" height="20">
                  <use href={sprite + '#icon-arrow-right'}></use>
                </svg>
              </span>
            </motion.button>
          </div>
        </li>
        <li className={css.blog__item}>
          <p className={css.blog__category}>Category</p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            className={css.blog__subtitle}
          >
            Digital Transformation of a large Telematic Service
          </motion.h3>
          <div className={css.blog__info}>
            <p className={css.blog__time}>
              <svg width="20" height="23">
                <use href={sprite + '#icon-timer'}></use>
              </svg>
              12 hours ago
            </p>
            <p className={css.blog__writer}>
              <svg width="24" height="24">
                <use href={sprite + '#icon-human'}></use>
              </svg>
              Writer Name
            </p>
          </div>
        </li>
        <li className={css.blog__item}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={backgroundAnimation}
            src={handBackground}
            alt="hand"
            className={css.blog__background}
          />
          <p className={css.blog__category}>Category</p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            className={css.blog__subtitle}
          >
            Digital Transformation of a large Telematic Service
          </motion.h3>
          <div className={css.blog__info}>
            <p className={css.blog__time}>
              <svg width="20" height="23">
                <use href={sprite + '#icon-timer'}></use>
              </svg>
              12 hours ago
            </p>
            <p className={css.blog__writer}>
              <svg width="24" height="24">
                <use href={sprite + '#icon-human'}></use>
              </svg>
              Writer Name
            </p>
          </div>
        </li>
        <li className={css.blog__item}>
          <motion.img
            initial="hidden"
            whileInView="visible"
            variants={backgroundAnimation}
            src={lightBackground}
            alt="hand"
            className={css.blog__background}
          />
          <p className={css.blog__category}>Category</p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            className={css.blog__subtitle}
          >
            Digital Transformation of a large Telematic Service
          </motion.h3>
          <div className={css.blog__info}>
            <p className={css.blog__time}>
              <svg width="20" height="23">
                <use href={sprite + '#icon-timer'}></use>
              </svg>
              12 hours ago
            </p>
            <p className={css.blog__writer}>
              <svg width="24" height="24">
                <use href={sprite + '#icon-human'}></use>
              </svg>
              Writer Name
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Blog;
