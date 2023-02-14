import Media from 'react-media';
import { Link } from 'react-router-dom';
import css from './Header.module.scss';
import logo from '../../images/header/logo.png';
import sprite from '../../images/sprite.svg';

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
                    <Link className={css.navigation__link}>Services</Link>
                  </li>
                  <li className={css.navigation__item}>
                    <Link className={css.navigation__link}>Cases</Link>
                  </li>
                  <li className={css.navigation__item}>
                    <Link className={css.navigation__link}>About</Link>
                  </li>
                  <li className={css.navigation__item}>
                    <Link className={css.navigation__link}>Contacts</Link>
                  </li>
                </ul>
                <button type="button" className={css.header__quote}>
                  Get Quote
                </button>
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
