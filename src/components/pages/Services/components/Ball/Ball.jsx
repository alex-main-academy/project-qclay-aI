import css from './Ball.module.scss';
import lampVideo from '../../video/lamps.mp4';

const Ball = () => {
  return (
    <section className={css.ball}>
      <video autoPlay muted loop className={css.ball__video}>
        <source src={lampVideo} />
      </video>
    </section>
  );
};

export default Ball;
