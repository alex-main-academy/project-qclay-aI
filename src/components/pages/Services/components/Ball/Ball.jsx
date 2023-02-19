import css from './Ball.module.scss';
import ballImageMobile from '../../images/ball/ball-mobile.png';
import Media from 'react-media';
import lampVideo from '../../video/lamps.mp4';

const Ball = () => {
  return (
    <section className={css.ball}>
      <Media
        query="(min-width:768px)"
        render={() => (
          <video autoPlay muted loop className={css.ball__video}>
            <source src={lampVideo} />
          </video>
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
