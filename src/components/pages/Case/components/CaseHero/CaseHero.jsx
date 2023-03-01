import Header from 'components/pages/Services/components/Header/Header';
import Media from 'react-media';
import css from './CaseHero.module.scss';

const CaseHero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <Header />
        <h1 className={css.hero__title}>
          Lorem ipsum dolor sit amet cons ectetur lorem ipsum Dolor sit amet
        </h1>
        <p className={css.hero__text__big}>
          Lorem ipsum dolor sit amet cons ectetur lorem ipsum Dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <Media
          query="(min-width:768px)"
          render={() => (
            <p className={css.hero__text__small}>
              Lorem ipsum dolor sit amet cons ectetur lorem ipsum Dolor sit amet
              Lorem ipsum dolor sit amet
            </p>
          )}
        />
        <Media
          query="(max-width:767px)"
          render={() => (
            <p className={css.hero__text__small}>
              The power of Data Analysis & Software Development Combined
            </p>
          )}
        />
      </div>
    </section>
  );
};

export default CaseHero;
