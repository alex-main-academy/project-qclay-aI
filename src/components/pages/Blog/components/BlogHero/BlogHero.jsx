import { Link } from 'react-router-dom';
import Header from 'components/pages/Services/components/Header/Header';
import Media from 'react-media';
import css from './BlogHero.module.scss';

const BlogHero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <Header />
        <h1 className={css.hero__title}>
          Lorem ipsum dolor sit amet cons ectetur lorem ipsum. Dolor sit amet
        </h1>
        <div className={css.hero__border}></div>
        <Media
          query="(min-width:1124px)"
          render={() => (
            <div className={css.hero__block}>
              <ul className={css.hero__list}>
                <li className={css.hero__item}>
                  <Link to="/" className={css.hero__link}>
                    Services
                  </Link>
                </li>
                <li className={css.hero__item}>
                  <Link to="/cases" className={css.hero__link}>
                    Cases
                  </Link>
                </li>
                <li className={css.hero__item}>
                  <Link to="/blog" className={css.hero__link}>
                    About
                  </Link>
                </li>
                <li className={css.hero__item}>
                  <Link className={css.hero__link}>Contacts</Link>
                </li>
              </ul>
              <p className={css.hero__text}>
                During the discovery call with a client, we provide a free AI
                consulting session on a client’s tech challenges.
              </p>
            </div>
          )}
        />
        <Media
          query="(max-width:1123px)"
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

export default BlogHero;
