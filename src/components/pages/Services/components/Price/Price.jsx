import { motion } from 'framer-motion';
import Media from 'react-media';
import css from './Price.module.scss';

const borderAnimation = {
  hidden: {
    x: '-30%',
  },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Price = () => {
  return (
    <section className={css.price}>
      <div className="container">
        <h2 className={css.price__title}>
          Our <span>Pricing</span> Lorem ipsum dolor sit
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={borderAnimation}
          className={css.price__border}
        ></motion.div>
        <ul className={css.price__list}>
          <li className={css.price__card}>
            <p className={css.card__sharp}>#1</p>
            <h3 className={css.card__title}>Lorem ipsum dolor sit </h3>
            <p className={css.card__price}>$00.00</p>
            <p className={css.card__accept}>We accept both, fiat and crypto</p>
            <p className={css.card__weeks}>2 weeks</p>
            <p className={css.card__estimated}>Estimated on a project basis</p>
          </li>
          <li className={css.price__card}>
            <p className={css.card__sharp}>#1</p>
            <h3 className={css.card__title}>Lorem ipsum dolor sit </h3>
            <p className={css.card__price}>$00.00</p>
            <p className={css.card__accept}>We accept both, fiat and crypto</p>
            <p className={css.card__weeks}>2 weeks</p>
            <p className={css.card__estimated}>Estimated on a project basis</p>
          </li>
          <li className={css.price__card}>
            <p className={css.card__sharp}>#1</p>
            <h3 className={css.card__title}>Lorem ipsum dolor sit </h3>
            <p className={css.card__price}>$00.00</p>
            <p className={css.card__accept}>We accept both, fiat and crypto</p>
            <p className={css.card__weeks}>2 weeks</p>
            <p className={css.card__estimated}>Estimated on a project basis</p>
          </li>
        </ul>
        <Media
          query="(max-width:767px)"
          render={() => <span className={css.price__pagination}></span>}
        />
      </div>
    </section>
  );
};

export default Price;
