import css from './Team.module.scss';
import decorImage from '../../images/team/decor.png';
import boyImage from '../../images/team/boy.png';
import girlImage from '../../images/team/girl.png';
import bigCircleImage from '../../images/team/big-circle.png';
import smallCircleImage from '../../images/team/small-circle.png';
import lineImage from '../../images/team/line.png';
import sprite from '../../images/sprite.svg';

const Team = () => {
  return (
    <section className={css.team}>
      <div className="container">
        <h2 className={css.team__title}>
          OUR <span>Team</span>
        </h2>
        <div className={css.team__border}></div>
        <p className={css.team__text}>
          Lorem ipsum dolor sit amet cons ectetur lorem ipsum. Dolor sit amet
          consectetur. Lorem ipsum
        </p>
        <div className={css.team__block}>
          <div className={css.team__member}>
            <img src={boyImage} alt="boy" className={css.member__photo} />
            <div>
              <p className={css.member__team}>Team</p>
              <h3 className={css.member__name}>Member name</h3>
              <img src={decorImage} alt="decor" className={css.member__decor} />
              <p className={css.member__position}>Position name</p>
            </div>
          </div>
          <div className={css.team__member}>
            <img src={girlImage} alt="girl" className={css.member__photo} />
            <div>
              <p className={css.member__team}>Team</p>
              <h3 className={css.member__name}>Member name</h3>
              <img src={decorImage} alt="decor" className={css.member__decor} />
              <p className={css.member__position}>Position name</p>
            </div>
          </div>
        </div>
        <div className={css.team__buttons}>
          <button className={css.team__button__black} type="button">
            <svg width="29" height="20">
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </button>
          <button className={css.team__button__white} type="button">
            <svg width="29" height="20">
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </button>
        </div>
        <img
          src={bigCircleImage}
          alt="decor"
          className={css.team__circle__big}
        />
        <img
          src={smallCircleImage}
          alt="decor"
          className={css.team__circle__small}
        />
        <img src={lineImage} alt="decor" className={css.team__line} />
      </div>
    </section>
  );
};

export default Team;
