import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Media from 'react-media';
import css from './UsesHeader.module.scss';
import logo from '../../images/usesHeader/logo.png';
import sprite from '../../images/sprite.svg';

const hoverEffectAnimation = {
  initial: {
    width: 203,
  },
  hover: {
    width: [220, 210],
    transition: { duration: 0.5 },
  },
};

const UsesHeader = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__container}>
          <Link to="/" className={css.header__logo}>
            <img src={logo} alt="logo" width="54" />
            QClay AI
          </Link>
          <Media
            query="(min-width:1124px)"
            render={() => (
              <div className={css.header__button}>
                <motion.button
                  initial="initial"
                  whileHover="hover"
                  variants={hoverEffectAnimation}
                  type="button"
                  className={css.header__quote}
                >
                  <span className={css.white__span}>Get Quote</span>
                  <span className={css.black__span}>Get Quote</span>
                </motion.button>
              </div>
            )}
          />
          <Media
            query="(max-width:1123px)"
            render={() => (
              <svg
                width="29.8"
                height="18.4"
                className={css.header__burger__icon}
              >
                <use href={sprite + '#icon-burger'}></use>
              </svg>
            )}
          />
        </div>
      </div>
    </header>
  );
};

export default UsesHeader;
