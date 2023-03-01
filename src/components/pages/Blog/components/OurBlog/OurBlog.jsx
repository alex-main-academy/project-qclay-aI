import Media from 'react-media';
import css from './OurBlog.module.scss';
import sprite from '../../images/sprite.svg';
import firstImageBack from '../../images/ourBlog/background-1.png';
import secondImageBack from '../../images/ourBlog/background-2.png';
import thirdImageBack from '../../images/ourBlog/background-3.png';
import fourthImageBack from '../../images/ourBlog/background-4.png';

const OurBlog = () => {
  return (
    <section className={css.blog}>
      <div className="container">
        <h2 className={css.blog__title}>
          Our <span>Blog</span>
        </h2>
        <div className={css.blog__border}></div>
      </div>
      <ul className={css.blog__list}>
        <li className={css.blog__item}>
          <img
            src={firstImageBack}
            alt="hand"
            className={css.blog__background}
          />
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
          <img
            src={secondImageBack}
            alt="hand"
            className={css.blog__background}
          />
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
          <img
            src={thirdImageBack}
            alt="hand"
            className={css.blog__background}
          />
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
          <img
            src={fourthImageBack}
            alt="hand"
            className={css.blog__background}
          />
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
          <img
            src={firstImageBack}
            alt="hand"
            className={css.blog__background}
          />
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
          <img
            src={secondImageBack}
            alt="hand"
            className={css.blog__background}
          />
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
        <Media
          query="(min-width:1124px)"
          render={() => (
            <>
              <li className={css.blog__item}>
                <img
                  src={thirdImageBack}
                  alt="hand"
                  className={css.blog__background}
                />
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
                <img
                  src={fourthImageBack}
                  alt="hand"
                  className={css.blog__background}
                />
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
            </>
          )}
        />
      </ul>
    </section>
  );
};

export default OurBlog;
