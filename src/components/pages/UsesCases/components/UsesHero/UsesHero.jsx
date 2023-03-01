import Media from 'react-media';
import UsesHeader from '../UsesHeader/UsesHeader';
import css from './UsesHero.module.scss';

const UsesHero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <UsesHeader />
        <h1 className={css.hero__title}>
          Lorem ipsum dolor sit amet cons ectetur lorem ipsum. Dolor sit amet{' '}
        </h1>
        <div className={css.hero__border}></div>
        <Media
          query="(min-width:768px)"
          render={() => (
            <p className={css.hero__text}>
              During the discovery call with a client, we provide a free AI
              consulting session on a client’s tech challenges.
            </p>
          )}
        />
        <Media
          query="(max-width:767px)"
          render={() => (
            <p className={css.hero__text}>
              The power of Data Analysis & Software Development Combined
            </p>
          )}
        />
      </div>
    </section>
  );
};

export default UsesHero;
