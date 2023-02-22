import React, { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { nanoid } from 'nanoid';
import css from './Industry.module.scss';
import sprite from '../../images/sprite.svg';
import figureImage from '../../images/industry/figure.png';
import Media from 'react-media';
import lineLottie from '../../lotties/ai_lines.json';
import industryContentArray from './IndustryContentArray';

const Industry = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const playerRef = useRef(Player);
  const handleToggleAnimation = () => {
    if (width > 1123) {
      playerRef.current.stop();
      playerRef.current.play();
    } else {
      return;
    }
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
            {industryContentArray.map(({ title, content, id }) => {
              return (
                <li
                  className={css.industry__item}
                  key={id}
                  onMouseEnter={handleToggleAnimation}
                >
                  <button className={css.industry__button}>
                    <h3 className={css.industry__subtitle}>
                      <span>{title}</span>
                      <svg width="37.6" height="25.6">
                        <use href={sprite + '#icon-arrow-bottom-right'}></use>
                      </svg>
                    </h3>
                    <Media
                      query="(max-width:767px)"
                      render={() => (
                        <div className={css.text__mobile}>
                          <h3 className={css.mobile__title}>{title}</h3>
                          {content.map(elem => {
                            return (
                              <p className={css.mobile__par} key={nanoid()}>
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
                                <li className={css.text__item} key={nanoid()}>
                                  <p className={css.text__par}>{elem}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    />
                  </button>
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
