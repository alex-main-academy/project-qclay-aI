import css from './Products.module.scss';
import aboutProductsBlockImage from '../../images/products/about-products-block.png';
import sprite from '../../images/sprite.svg';
import trueArrowIcon from '../../images/products/true-arrow.png';
import mobileGroupImage from '../../images/products/mobile-group.png';
import Media from 'react-media';

const Products = () => {
  return (
    <section className={css.products}>
      <div className="container">
        <div className={css.products__border}></div>
        <p className={css.products__year}>2023</p>
        <h2 className={css.products__title}>Case Title</h2>
        <div className={css.products__content}>
          <div className={css.products__top}>
            <div className={css.products__info}>
              <h3 className={css.products__subtitle}>
                DIFFICULTIES OF PUBLISHING <span>PRODUCTS ON Qclay AI</span>
              </h3>
              <p className={css.products__text}>
                Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui dolor
                in. Nullam neque a arcu nibh mattis lacus sem scelerisque.
              </p>
              <p className={css.products__text}>
                Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                eget nec faucibus quam tincidunt eu maecenas.
              </p>
              <p className={css.products__text}>
                Tincidunt quam semper semper ipsum. Sed gravida neque faucibus
                semper convallis consequat luctus. Pellentesque.
              </p>
              <p className={css.products__text}>
                Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                eget nec faucibus quam tincidunt eu maecenas. et dolor amet sed
                iaculis eu vitae vitae diam.
              </p>
            </div>
            <Media
              query="(min-width:768px)"
              render={() => (
                <>
                  <img
                    src={aboutProductsBlockImage}
                    alt="about products"
                    className={css.products__image__first}
                  />
                  <img
                    src={aboutProductsBlockImage}
                    alt="about products"
                    className={css.products__image__second}
                  />
                </>
              )}
            />
            <Media
              query="(max-width:767px)"
              render={() => (
                <img
                  src={mobileGroupImage}
                  alt="mobile"
                  className={css.mobile__image}
                />
              )}
            />
          </div>
          <div className={css.products__bottom}>
            <div className={css.products__left}>
              <h3 className={css.left__subtitle}>
                A Task
                <span>
                  <svg width="18.7" height="31.8">
                    <use href={sprite + '#icon-question'}></use>
                  </svg>
                </span>
              </h3>
              <p className={css.left__text}>
                Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui dolor
                in. Nullam neque a arcu nibh mattis lacus sem scelerisque.
                Tincidunt quam semper semper ipsum. Sed gravida neque faucibus
                semper convallis consequat luctus. Pellentesque et dolor amet
                sed iaculis eu vitae vitae diam. Convallis posuere montes mauris
                porta etiam rhoncus. Fermentum eget nec faucibus quam tincidunt
                eu maecenas.
              </p>
            </div>
            <div className={css.products__right}>
              <h3 className={css.right__title}>
                Decision
                <span>
                  <img src={trueArrowIcon} alt="icon" />
                </span>
              </h3>
              <p className={css.right__text}>
                Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui dolor
                in. Nullam neque a arcu nibh mattis lacus sem scelerisque.
                Tincidunt quam semper semper ipsum. Sed gravida neque faucibus
                semper convallis consequat luctus. Pellentesque et dolor amet
                sed iaculis eu vitae vitae diam. Convallis posuere montes mauris
                porta etiam rhoncus. Fermentum eget nec faucibus quam tincidunt
                eu maecenas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
