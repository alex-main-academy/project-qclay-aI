import css from './Industry.module.scss';
import sprite from '../../images/sprite.svg';
import schemaImage from '../../images/industry/schema.svg';
import figureImage from '../../images/industry/figure.png';
import Media from 'react-media';

const Industry = () => {
  const subtitlesArray = [
    'Healthcare',
    'Logistics',
    'Real Estate',
    'Education',
    'Fintech',
    'Agriculture',
    'E-commerce',
    'Gaming',
    'Social Media',
  ];

  return (
    <section className={css.industry}>
      <div className="container">
        <p className={css.industry__uptitle}>Applications</p>
        <h2 className={css.industry__title}>
          Industries where <br /> AI is optimizing the processes
        </h2>
        <div className={css.industry__block}>
          <ul className={css.industry__list}>
            {subtitlesArray.map(elem => {
              return (
                <li className={css.industry__item} key={elem}>
                  <h3 className={css.industry__subtitle}>
                    <span>{elem}</span>
                    <svg width="37.6" height="25.6">
                      <use href={sprite + '#icon-arrow-bottom-right'}></use>
                    </svg>
                  </h3>
                </li>
              );
            })}
          </ul>
          <Media
            query="(min-width:1124px)"
            render={() => (
              <>
                <img
                  src={schemaImage}
                  alt="schema"
                  className={css.industry__schema}
                />
                <img
                  src={figureImage}
                  alt="figure"
                  className={css.industry__figure}
                />
              </>
            )}
          />

          <Media
            query="(min-width:768px)"
            render={() => (
              <div className={css.industry__text}>
                <h3 className={css.text__title}>Healthcare</h3>
                <ul className={css.text__list}>
                  <li className={css.text__item}>
                    <p className={css.text__par}>
                      -Use of AI & automation to build functional & lifesaving
                      AI systems in healthcare.
                    </p>
                  </li>
                  <li className={css.text__item}>
                    <p className={css.text__par}>
                      -Provision of data analytics services to support
                      healthcare decisions.
                    </p>
                  </li>
                  <li className={css.text__item}>
                    <p className={css.text__par}>
                      -Development of AI-enabled platforms for patient data
                      collection to support diagnosis, notifications and disease
                      prevention.
                    </p>
                  </li>
                </ul>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
