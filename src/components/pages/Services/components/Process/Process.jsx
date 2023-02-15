import { Link } from 'react-router-dom';
import css from './Process.module.scss';
import sprite from '../../images/sprite.svg';
import circleFigureImage from '../../images/process/circle-figure.svg';
import Media from 'react-media';

const Process = () => {
  return (
    <section className={css.process}>
      <div className="container">
        <p className={css.process__uptitle}>About us</p>
        <h2 className={css.process__title}>
          A Development process that brings AI Results In weeks, not years
        </h2>
        <div className={css.process__border}></div>
        <p className={css.process__roadmap}>Roadmap</p>
        <ul className={css.process__list}>
          <li className={css.process__roadmap__item}>
            <img
              src={circleFigureImage}
              alt="figure"
              width="151"
              className={css.process__figure}
            />
            <span></span>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  01<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>Executive Briefing</h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                      sit amet consectetur. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  )}
                />
                <p className={css.process__time}>2 Hours</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                    sit amet consectetur. Lorem ipsum dolor sit amet
                    consectetur.
                  </p>
                )}
              />
            </button>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  02<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>Technology Assessment</h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                      sit amet consectetur. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  )}
                />
                <p className={css.process__time}>2 - 3 Days</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                    sit amet consectetur. Lorem ipsum dolor sit amet
                    consectetur.
                  </p>
                )}
              />
            </button>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  03<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>Production Trial</h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                      sit amet consectetur. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  )}
                />
                <p className={css.process__time}>8 -12 Weeks</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                    sit amet consectetur. Lorem ipsum dolor sit amet
                    consectetur.
                  </p>
                )}
              />
            </button>
          </li>
          <li className={css.process__item}>
            <button type="button" className={css.process__button}>
              <div>
                <p className={css.process__number}>
                  04<span>.</span>
                </p>
                <h3 className={css.process__subtitle}>
                  AI Application Deployment in Production
                </h3>
                <Media
                  query="(min-width:1124px)"
                  render={() => (
                    <p className={css.process__about}>
                      Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                      sit amet consectetur. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>
                  )}
                />
                <p className={css.process__time}>3 -6 Months</p>
              </div>
              <Media
                query="(max-width:1123px)"
                render={() => (
                  <p className={css.process__about}>
                    Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor
                    sit amet consectetur. Lorem ipsum dolor sit amet
                    consectetur.
                  </p>
                )}
              />
            </button>
          </li>
        </ul>
        <div className={css.process__block}>
          <p className={css.process__agree}>
            Upon agreeing on the roadmap, we sign a contract and set up a
            project team.
          </p>
          <div className={css.process__contact}>
            <Link className={css.process__contact__link}>Contact Us</Link>
            <Link className={css.process__contact__icon}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
