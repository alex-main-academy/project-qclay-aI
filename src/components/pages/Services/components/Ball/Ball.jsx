import { useInView } from 'react-intersection-observer';
import css from './Ball.module.scss';
import lampVideo from '../../video/lamps.mp4';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Ball = () => {
  const isVisibleSelector = useSelector(state => state.isElementVisible);
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView || !isVisibleSelector) {
      document.body.style.overflow = 'visible';
    }
  }, [inView, isVisibleSelector]);

  return (
    <section ref={ref} className="ball">
      {inView && (
        <video autoPlay muted playsInline className={css.ball__video}>
          <source src={lampVideo} />
        </video>
      )}
    </section>
  );
};

export default Ball;
