import css from './Service.module.scss';
import sprite from '../../images/sprite.svg';

const Service = () => {
  return (
    <section className={css.service}>
      <div className="container">
        <h2 className={css.service__title}>
          Services{' '}
          <span>
            <svg width="32" height="22">
              <use href={sprite + '#icon-arrow-bottom-right'}></use>
            </svg>
          </span>
        </h2>

        <div className={css.service__block}>
          <ul className={css.service__list}>
            <li className={css.service__item}>Predictive modeling</li>
            <li className={css.service__item}>Neural Network</li>
            <li className={css.service__item}>Cognitive computing</li>
            <li className={css.service__item}>Deep learning</li>
            <li className={css.service__item}>Knowledge graph</li>
            <li className={css.service__item}>Big data analysis</li>
            <li className={css.service__item}>NLP</li>
          </ul>

          <ul className={css.features}>
            <li className={css.features__item}>
              <span>*</span>Machine Learning
            </li>
            <li className={css.features__item}>
              <span>*</span>Natural Language Processing
            </li>
            <li className={css.features__item}>
              <span>*</span>Computer Vision
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
