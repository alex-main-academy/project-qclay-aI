import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { InView } from 'react-intersection-observer';
import Media from 'react-media';
import css from './Results.module.scss';
import cricleImage from '../../images/results/circle.png';
import laptopVideo from '../../video/laptop.mp4';

const Results = () => {
  const [inView, setInView] = useState(false);

  const { number } = useSpring({
    from: { number: 578.876 },
    number: 608.603,
    config: {
      duration: 750,
    },
    delay: 0,
    reset: true,
  });

  const { secondNumber } = useSpring({
    from: { secondNumber: 580.055 },
    secondNumber: 1318.367,
    config: {
      duration: 750,
    },
    delay: 0,
    reset: true,
  });

  const { thirdNumber } = useSpring({
    from: { thirdNumber: 4.298 },
    thirdNumber: 4.403,
    config: {
      duration: 750,
    },
    delay: 0,
    reset: true,
  });

  return (
    <InView onChange={setInView}>
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
                <InView>
                  {({ ref }) => (
                    <div ref={ref}>
                      {inView && (
                        <animated.p className={css.results__sum}>
                          {number.to(n => '$' + n.toFixed(3))}
                        </animated.p>
                      )}
                    </div>
                  )}
                </InView>
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
                <InView>
                  {({ ref }) => (
                    <div ref={ref}>
                      {inView && (
                        <animated.p className={css.results__sum}>
                          {secondNumber.to(n => '$' + n.toFixed(3))}
                        </animated.p>
                      )}
                    </div>
                  )}
                </InView>
                <p className={css.results__text}>
                  Generated revenue by AI Solutions
                </p>
              </div>
              <div className={css.results__bottom}>
                <InView>
                  {({ ref }) => (
                    <div ref={ref}>
                      {inView && (
                        <animated.p className={css.results__sum}>
                          {thirdNumber.to(n => '$' + n.toFixed(3))}
                        </animated.p>
                      )}
                    </div>
                  )}
                </InView>
                <p className={css.results__text}>
                  Human labor hour saved with the help of AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InView>
  );
};

export default Results;
