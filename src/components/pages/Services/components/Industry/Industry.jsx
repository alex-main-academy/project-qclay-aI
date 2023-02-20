import css from './Industry.module.scss';
import sprite from '../../images/sprite.svg';
import figureImage from '../../images/industry/figure.png';
import Media from 'react-media';
import lineLottie from '../../lotties/lines_ai.json';
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef } from 'react';
import industryContentArray from './IndustryContentArray';

const Industry = () => {
  const playerRef = useRef(Player);
  const handleToggleAnimation = () => {
    playerRef.current.stop();
    playerRef.current.play();
  };

  return (
    <section className={css.industry}>
      <div className="container">
        <p className={css.industry__uptitle}>Applications</p>
        <h2 className={css.industry__title}>
          Industries where <br /> AI is optimizing the processes
        </h2>
        <div className={css.industry__block}>
          <ul className={css.industry__list}>
            {industryContentArray.map(({ title, content }) => {
              return (
                <li
                  className={css.industry__item}
                  key={title}
                  onMouseEnter={handleToggleAnimation}
                >
                  <h3 className={css.industry__subtitle}>
                    <span>{title}</span>
                    <svg width="37.6" height="25.6">
                      <use href={sprite + '#icon-arrow-bottom-right'}></use>
                    </svg>
                  </h3>
                  <Media
                    query="(max-width:768px)"
                    render={() => (
                      <div className={css.text__mobile}>
                        <h3 className={css.mobile__title}>{title}</h3>
                        {content.map(elem => {
                          return (
                            <p className={css.mobile__par} key={elem}>
                              {elem}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  />
                  <Media
                    query="(min-width:768px)"
                    render={() => (
                      <div className={css.industry__text}>
                        <h3 className={css.text__title}>{title}</h3>
                        <ul className={css.text__list}>
                          {content.map(elem => {
                            return (
                              <li className={css.text__item} key={title}>
                                <p className={css.text__par}>{elem}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  />
                </li>
              );
            })}
          </ul>
          <Media
            query="(min-width:1124px)"
            render={() => (
              <>
                <Player
                  src={lineLottie}
                  direction={1}
                  ref={playerRef}
                  viewBox="0 0 100% 100%"
                  style={{
                    width: '260px',
                    height: '580px',
                    marginLeft: '78px',
                  }}
                />
                <img
                  src={figureImage}
                  alt="figure"
                  className={css.industry__figure}
                />
              </>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
