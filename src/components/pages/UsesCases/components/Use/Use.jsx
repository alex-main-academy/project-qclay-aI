import Media from 'react-media';
import { Link } from 'react-router-dom';
import css from './Use.module.scss';

const Use = () => {
  return (
    <section className={css.cases}>
      <div className="container">
        <h2 className={css.cases__title}>
          <span>Use Cases</span> and Demo
        </h2>
        <div className={css.cases__border}></div>
        <ul className={css.cases__list}>
          <li className={css.cases__item__first}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <li className={css.cases__item__second}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <li className={css.cases__item__third}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <li className={css.cases__item__fourth}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <li className={css.cases__item__first}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <li className={css.cases__item__second}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <li className={css.cases__item__third}>
            <p className={css.cases__data}>
              02 Jul 2020 <span></span> 5 min read
            </p>
            <h3 className={css.cases__subtitle}>
              Our Pricing Lorem ipsum dolor sit amet consec tetur.
            </h3>
            <Link className={css.cases__link}>New Case</Link>
          </li>
          <Media
            query="(min-width:1124px)"
            render={() => (
              <>
                <li className={css.cases__item__fourth}>
                  <p className={css.cases__data}>
                    02 Jul 2020 <span></span> 5 min read
                  </p>
                  <h3 className={css.cases__subtitle}>
                    Our Pricing Lorem ipsum dolor sit amet consec tetur.
                  </h3>
                  <Link className={css.cases__link}>New Case</Link>
                </li>
                <li className={css.cases__item__first}>
                  <p className={css.cases__data}>
                    02 Jul 2020 <span></span> 5 min read
                  </p>
                  <h3 className={css.cases__subtitle}>
                    Our Pricing Lorem ipsum dolor sit amet consec tetur.
                  </h3>
                  <Link className={css.cases__link}>New Case</Link>
                </li>
                <li className={css.cases__item__second}>
                  <p className={css.cases__data}>
                    02 Jul 2020 <span></span> 5 min read
                  </p>
                  <h3 className={css.cases__subtitle}>
                    Our Pricing Lorem ipsum dolor sit amet consec tetur.
                  </h3>
                  <Link className={css.cases__link}>New Case</Link>
                </li>
              </>
            )}
          />
        </ul>
      </div>
    </section>
  );
};

export default Use;
