import css from './Ball.module.scss';
import ballImage from '../../images/ball/ball.png';
import ballImageMobile from '../../images/ball/ball-mobile.png';
import Media from 'react-media';

const Ball = () => {
  return (
    <section className={css.ball}>
      <Media
        query="(min-width:768px)"
        render={() => (
          <img src={ballImage} alt="ball" className={css.ball__image} />
        )}
      />
      <Media
        query="(max-width:767px)"
        render={() => (
          <img src={ballImageMobile} alt="ball" className={css.ball__image} />
        )}
      />
    </section>
  );
};

export default Ball;
