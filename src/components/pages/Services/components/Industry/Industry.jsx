import css from './Industry.module.scss';
import sprite from '../../images/sprite.svg';
import figureImage from '../../images/industry/figure.png';
import Media from 'react-media';
import IndustryBlock from './IndustryBlock';
import lineLottie from '../../lotties/lines_ai.json';
import { Player } from '@lottiefiles/react-lottie-player';
import React, { useRef, useState } from 'react';

const Industry = () => {
  const playerRef = useRef(Player);

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

  const [text, setText] = useState('Healthcare');

  const handleChangeText = event => {
    const title = event.target.innerText;
    setText(title);
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
            {subtitlesArray.map(elem => {
              return (
                <li
                  className={css.industry__item}
                  key={elem}
                  onMouseEnter={event => handleChangeText(event)}
                >
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

          <Media
            query="(min-width:768px)"
            render={() => (
              <div className={css.industry__text}>
                <IndustryBlock text={text} />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
