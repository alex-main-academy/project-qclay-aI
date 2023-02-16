import { Link } from 'react-router-dom';
import css from './Footer.module.scss';
import logoImage from '../../images/footer/logo.png';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__container}>
          <Link className={css.footer__logo}>
            <img src={logoImage} alt="logo" />
            QClay AI
          </Link>
          <p className={css.footer__copy}>
            All copyrights reserved ⓒ AI Qclay 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
