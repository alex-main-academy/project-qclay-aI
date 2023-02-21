import { motion } from 'framer-motion';
import css from './Contact.module.scss';
import sprite from '../../images/sprite.svg';
import cardImage from '../../images/contact/card.png';
import Media from 'react-media';

const borderAnimation = {
  hidden: {
    x: '-50%',
  },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    top: '400px',
    rotate: '45deg',
    translate: '-50%',
  },
  visible: {
    opacity: 1,
    top: '192px',
    rotate: '0',
    translate: '-50%',
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const mobileCardAnimation = {
  hidden: {
    opacity: 0,
    top: '400px',
    rotate: '45deg',
    translate: '-50%',
  },
  visible: {
    opacity: 1,
    top: '85px',
    rotate: '0',
    translate: '-50%',
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const Contact = () => {
  return (
    <section className={css.contact}>
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          className={css.contact__title}
        >
          Cont<span>act</span> <span>Us</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.contact__border}
        ></motion.div>
        <form className={css.contact__form}>
          <div className={css.form__top}>
            <div>
              <label className={css.form__label}>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Alexandro Ramirez"
                  className={css.form__name}
                />
              </label>
            </div>
            <div>
              <label className={css.form__label}>
                <span>Your email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="alexandro@gmail.com"
                  className={css.form__email}
                />
              </label>
            </div>
          </div>
          <label className={css.form__label}>
            <span>Your Company</span>
            <input
              type="text"
              name="company"
              placeholder="Qclay"
              className={css.form__company}
            />
          </label>
          <label className={css.form__label}>
            <span>Project Description</span>
            <input
              type="text"
              name="project"
              placeholder="Description Loream Ipsum"
              className={css.form__project}
            />
          </label>
          <div className={css.form__buttons}>
            <button className={css.form__send}>Send Message</button>
            <button className={css.form__icon}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
          </div>
        </form>
        <Media
          query="(min-width:768px)"
          render={() => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={cardAnimation}
              src={cardImage}
              alt="card"
              className={css.contact__card}
            />
          )}
        />
        <Media
          query="(max-width:767px)"
          render={() => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={mobileCardAnimation}
              src={cardImage}
              alt="card"
              className={css.contact__card}
            />
          )}
        />
      </div>
    </section>
  );
};

export default Contact;
