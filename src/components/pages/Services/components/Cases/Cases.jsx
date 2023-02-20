import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import css from './Cases.module.scss';
import sprite from '../../images/sprite.svg';
import handImage from '../../images/cases/image-hand.png';

const leftAnimation = {
  hidden: {
    opacity: 0,
    translateX: '-100%',
    visibility: 'hidden',
  },
  visible: {
    opacity: 1,
    translateX: 0,
    visibility: 'visible',
    transition: { duration: 0.5 },
  },
};

const rightAnimation = {
  hidden: {
    opacity: 0,
    translateX: '100%',
    visibility: 'hidden',
  },
  visible: {
    opacity: 1,
    translateX: 0,
    visibility: 'visible',
    transition: { duration: 0.5 },
  },
};

const imageAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const Cases = () => {
  return (
    <section className={css.cases}>
      <div className="container">
        <h2 className={css.cases__title}>
          <span>Use Cases</span> and Demo
        </h2>
        <div className={css.cases__border}></div>
        <ul className={css.cases__list}>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={leftAnimation}
            className={css.cases__item__first}
          >
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={rightAnimation}
            className={css.cases__item__second}
          >
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={leftAnimation}
            className={css.cases__item__third}
          >
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            variants={rightAnimation}
            className={css.cases__item__fourth}
          >
            <p className={css.cases__data}>
              Over 15 <span></span> Use Cases
            </p>
            <h3 className={css.cases__subtitle}>See All Use Cases</h3>
            <Link className={css.cases__link}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </Link>
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
              src={handImage}
              alt="hand"
              className={css.cases__image}
            />
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Cases;
