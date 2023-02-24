import { motion } from 'framer-motion';
import css from './Identify.module.scss';

const borderAnimation = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const parAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Identify = () => {
  return (
    <section className={css.identify}>
      <div className="container">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          className={css.identify__uptitle}
        >
          About us
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={textAnimation}
          className={css.identify__title}
        >
          Identify AI opportunities and use them to build{' '}
          <span>resilience</span> and
          <span> business</span> results
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.identify__border}
        ></motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={parAnimation}
          className={css.identify__text}
        >
          During the discovery call with a client, we provide a free AI
          consulting session on a client’s tech challenges.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={parAnimation}
          className={css.identify__text}
        >
          We develop a detailed roadmap which includes not only transparent
          pricing but also project stages, delivery timeline, and team
          breakdown.
        </motion.p>
      </div>
    </section>
  );
};

export default Identify;
