import css from './Result.module.scss';
import schemaImage from '../../images/result/schema.png';
import sprite from '../../images/sprite.svg';

const Result = () => {
  return (
    <section className={css.result}>
      <div className="container">
        <div className={css.result__container}>
          <div className={css.result__left}>
            <span className={css.result__question}>
              <svg width="18.7" height="31.8">
                <use href={sprite + '#icon-question'}></use>
              </svg>
            </span>
            <img
              src={schemaImage}
              alt="schema"
              className={css.result__schema}
            />
          </div>
          <div className={css.result__right}>
            <h2 className={css.result__title}>WHAT HAPPENED AS A RESULT</h2>
            <p className={css.result__text}>
              Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui dolor
              in. Nullam neque a arcu nibh mattis lacus sem scelerisque.
              Tincidunt quam semper semper ipsum. Sed gravida neque faucibus
              semper convallis consequat luctus. Pellentesque et dolor amet sed
              iaculis eu vitae vitae diam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
