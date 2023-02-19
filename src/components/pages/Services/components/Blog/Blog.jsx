import css from './Blog.module.scss';
import sprite from '../../images/sprite.svg';
import dotsLottie from '../../lotties/dots_feather.json';
import { Player } from '@lottiefiles/react-lottie-player';

const Blog = () => {
  return (
    <section className={css.blog}>
      <ul className={css.blog__list}>
        <li className={css.blog__item}>
          <h2 className={css.blog__title}>Our Blog</h2>
          <Player
            src={dotsLottie}
            autoplay
            loop
            className={css.blog__lottie}
          ></Player>
          <div className={css.blog__buttons}>
            <button type="button" className={css.blog__button__black}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
            <button type="button" className={css.blog__button__white}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
          </div>
        </li>
        <li className={css.blog__item}>
          <p className={css.blog__category}>Category</p>
          <h3 className={css.blog__subtitle}>
            Digital Transformation of a large Telematic Service
          </h3>
          <div className={css.blog__info}>
            <p className={css.blog__time}>
              <svg width="20" height="23">
                <use href={sprite + '#icon-timer'}></use>
              </svg>
              12 hours ago
            </p>
            <p className={css.blog__writer}>
              <svg width="24" height="24">
                <use href={sprite + '#icon-human'}></use>
              </svg>
              Writer Name
            </p>
          </div>
        </li>
        <li className={css.blog__item}>
          <p className={css.blog__category}>Category</p>
          <h3 className={css.blog__subtitle}>
            Digital Transformation of a large Telematic Service
          </h3>
          <div className={css.blog__info}>
            <p className={css.blog__time}>
              <svg width="20" height="23">
                <use href={sprite + '#icon-timer'}></use>
              </svg>
              12 hours ago
            </p>
            <p className={css.blog__writer}>
              <svg width="24" height="24">
                <use href={sprite + '#icon-human'}></use>
              </svg>
              Writer Name
            </p>
          </div>
        </li>
        <li className={css.blog__item}>
          <p className={css.blog__category}>Category</p>
          <h3 className={css.blog__subtitle}>
            Digital Transformation of a large Telematic Service
          </h3>
          <div className={css.blog__info}>
            <p className={css.blog__time}>
              <svg width="20" height="23">
                <use href={sprite + '#icon-timer'}></use>
              </svg>
              12 hours ago
            </p>
            <p className={css.blog__writer}>
              <svg width="24" height="24">
                <use href={sprite + '#icon-human'}></use>
              </svg>
              Writer Name
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Blog;
