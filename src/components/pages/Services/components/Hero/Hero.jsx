import Header from '../Header/Header';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={css.hero}>
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
