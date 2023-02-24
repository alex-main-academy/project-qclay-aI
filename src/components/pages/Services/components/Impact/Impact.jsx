import { motion } from 'framer-motion';
import Media from 'react-media';
import css from './Impact.module.scss';
import tennisVideo from '../../video/tennis.mp4';
import tennisMobileVideo from '../../video/tennis-mob.mp4';

const textAnimation = {
  visible: {},
};

const Impact = () => {
  return (
    <section className={css.impact}>
      <div className="container">
        <motion.p
          whileInView="visible"
          variants={textAnimation}
          className={css.impact__uptitle}
        >
          AI Technology
        </motion.p>
        <motion.h2
          whileInView="visible"
          variants={textAnimation}
          className={css.impact__title}
        >
          The impact of AI on the world is far-reaching and profound, changing
          the way we live, work, and interact.
        </motion.h2>
        <video autoPlay muted loop className={css.impact__video}>
          <source src={tennisVideo} />
        </video>
        <Media
          query="(max-width:767px)"
          render={() => (
            <>
              <div className={css.impact__border}></div>
              <video autoPlay muted loop className={css.impact__video}>
                <source src={tennisMobileVideo} />
              </video>
            </>
          )}
        />
        <motion.p
          whileInView="visible"
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
