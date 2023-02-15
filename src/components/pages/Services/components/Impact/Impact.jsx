import Media from 'react-media';
import css from './Impact.module.scss';
import rocketImage from '../../images/impact/rocket.png';
import ballImage from '../../images/impact/ball.png';

const Impact = () => {
  return (
    <section className={css.impact}>
      <div className="container">
        <p className={css.impact__uptitle}>AI Technology</p>
        <h2 className={css.impact__title}>
          The impact of AI on the world is far-reaching and profound, changing
          the way we live, work, and interact.
        </h2>
        <Media
          query="(max-width:767px)"
          render={() => <div className={css.impact__border}></div>}
        />
        <img src={rocketImage} alt="rocket" className={css.impact__rocket} />
        <img src={ballImage} alt="ball" className={css.impact__ball} />
        <p className={css.impact__text}>
          It is no longer feasible to resist the integration of AI in various
          industries, but rather to embrace and lead it in order to stay
          competitive in the modern marketplace. Those who do not adapt to this
          technology risk being left behind.
        </p>
      </div>
    </section>
  );
};

export default Impact;
