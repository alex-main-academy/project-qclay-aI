import Header from '../Header/Header';
import css from './Hero.module.scss';
import backVideo from '../../video/hero-back-video.mp4';

const Hero = () => {
  return (
    <section className={css.hero}>
      <video autoPlay muted loop className={css.hero__video}>
        <source src={backVideo} type="video/mp4" />
      </video>
      <Header />
      <div className="container">
        <p className={css.hero__text}>
          The power of Data Analysis & Software Development Combined
        </p>
      </div>
    </section>
  );
};

export default Hero;
