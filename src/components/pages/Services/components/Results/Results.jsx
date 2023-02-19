import css from './Results.module.scss';
import cricleImage from '../../images/results/circle.png';
import laptopImage from '../../images/results/laptop.png';
import laptopVideo from '../../video/laptop.mp4';
import Media from 'react-media';

const Results = () => {
  return (
    <section className={css.results}>
      <div className="container">
        <div className={css.results__block}>
          <div className={css.results__beneficial}>
            <h2 className={css.results__title}>
              <span>Beneficial</span> results of AI in Business
            </h2>
            <img
              src={cricleImage}
              alt="circle"
              width="471"
              className={css.results__circle}
            />
          </div>
          <div className={css.results__saved}>
            <div>
              <p className={css.results__sum}>$608,603</p>
              <Media
                query="(min-width:1123px)"
                render={() => (
                  <video autoPlay muted loop className={css.results__laptop}>
                    <source src={laptopVideo} />
                  </video>
                )}
              />
              <p className={css.results__text}>
                Saved operational costs due to AI
              </p>
            </div>
            <Media
              query="(max-width:1123px)"
              render={() => (
                <video autoPlay muted loop className={css.results__laptop}>
                  <source src={laptopVideo} />
                </video>
              )}
            />
          </div>
          <div className={css.results__last}>
            <div className={css.results__top}>
              <p className={css.results__sum}>$1,318,367</p>
              <p className={css.results__text}>
                Generated revenue by AI Solutions
              </p>
            </div>
            <div className={css.results__bottom}>
              <p className={css.results__sum}>$4,403</p>
              <p className={css.results__text}>
                Human labor hour saved with the help of AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
