import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Media from 'react-media';
import css from './Header.module.scss';
import logo from '../../images/header/logo.png';
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

const Header = () => {
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
              <>
                <ul className={css.navigation}>
                  <li className={css.navigation__item}>
                    <Link to="/" className={css.navigation__link}>
                      Services
                    </Link>
                  </li>
                  <li className={css.navigation__item}>
                    <Link to="/cases" className={css.navigation__link}>
                      Cases
                    </Link>
                  </li>
                  <li className={css.navigation__item}>
                    <Link to="/blog" className={css.navigation__link}>
                      About
                    </Link>
                  </li>
                  <li className={css.navigation__item}>
                    <Link className={css.navigation__link}>Contacts</Link>
                  </li>
                </ul>
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
              </>
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

export default Header;
