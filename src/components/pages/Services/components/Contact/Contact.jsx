import css from './Contact.module.scss';
import sprite from '../../images/sprite.svg';
import cardImage from '../../images/contact/card.png';

const Contact = () => {
  return (
    <section className={css.contact}>
      <div className="container">
        <h2 className={css.contact__title}>
          Cont<span>act</span> Us
        </h2>
        <div className={css.contact__border}></div>
        <form className={css.contact__form}>
          <div className={css.form__top}>
            <div>
              <label className={css.form__label}>
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Alexandro Ramirez"
                  className={css.form__name}
                />
              </label>
            </div>
            <div>
              <label className={css.form__label}>
                <span>Your email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="alexandro@gmail.com"
                  className={css.form__email}
                />
              </label>
            </div>
          </div>
          <label className={css.form__label}>
            <span>Your Company</span>
            <input
              type="text"
              name="company"
              placeholder="Qclay"
              className={css.form__company}
            />
          </label>
          <label className={css.form__label}>
            <span>Project Description</span>
            <input
              type="text"
              name="project"
              placeholder="Description Loream Ipsum"
              className={css.form__project}
            />
          </label>
          <div className={css.form__buttons}>
            <button className={css.form__send}>Send Message</button>
            <button className={css.form__icon}>
              <svg width="29" height="20">
                <use href={sprite + '#icon-arrow-right'}></use>
              </svg>
            </button>
          </div>
        </form>
        <img src={cardImage} alt="card" className={css.contact__card} />
      </div>
    </section>
  );
};

export default Contact;
