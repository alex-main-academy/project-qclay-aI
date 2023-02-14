import css from './Science.module.scss';
import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import titleIcon from '../../images/science/title-icon.png';
import circlesImage from '../../images/science/circle-image.png';

const Science = () => {
  return (
    <section className={css.science}>
      <div className="container">
        <div className={css.science__top}>
          <h2 className={css.science__title}>
            Data Science and AI product development Company
            <img
              src={titleIcon}
              alt="icon"
              width="78.5"
              className={css.science__title__icon}
            />
          </h2>
          <div className={css.science__contact}>
            <Link className={css.science__contact__link}>Contact Us</Link>
            <Link className={css.science__contact__arrow}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </Link>
          </div>
        </div>

        <div className={css.science__border}></div>
        <p className={css.science__year}>2023</p>

        <div className={css.science__bottom}>
          <img
            src={circlesImage}
            alt="circles"
            className={css.science__circles}
          />
          <div>
            <ul className={css.science__list}>
              <li className={css.science__item}>
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-linkedin'}></use>
                  </svg>
                </Link>
              </li>
              <li className={css.science__item}>
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-instagram'}></use>
                  </svg>
                </Link>
              </li>
              <li className={css.science__item}>
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-twitter'}></use>
                  </svg>
                </Link>
              </li>
              <li className={css.science__item}>
                <Link className={css.science__link}>
                  <svg width="51" height="51" className={css.science__icon}>
                    <use href={sprite + '#icon-youtube'}></use>
                  </svg>
                </Link>
              </li>
            </ul>
            <p className={css.science__text}>
              We create astounding products powered by Machine Learning and Data
              analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
