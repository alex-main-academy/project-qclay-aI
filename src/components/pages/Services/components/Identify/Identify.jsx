import css from './Identify.module.scss';

const Identify = () => {
  return (
    <section className={css.identify}>
      <div className="container">
        <p className={css.identify__uptitle}>About us</p>
        <h2 className={css.identify__title}>
          Identify AI opportunities and use them to build{' '}
          <span>resilience</span> and
          <span> business</span> results
        </h2>
        <div className={css.identify__border}></div>
        <p className={css.identify__text}>
          During the discovery call with a client, we provide a free AI
          consulting session on a client’s tech challenges.{' '}
        </p>
        <p className={css.identify__text}>
          We develop a detailed roadmap which includes not only transparent
          pricing but also project stages, delivery timeline, and team
          breakdown.
        </p>
      </div>
    </section>
  );
};

export default Identify;
