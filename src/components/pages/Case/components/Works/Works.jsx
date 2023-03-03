import css from './Works.module.scss';
import blockImage from '../../images/works/image-block.png';
import trueArrowIcon from '../../images/works/true-arrow.png';

const Works = () => {
  return (
    <section className={css.works}>
      <div className="container">
        <h2 className={css.works__title}>
          <span>How</span> it all works
        </h2>
        <div className={css.works__border}></div>
        <div className={css.works__top}>
          <ul className={css.top__list}>
            <li className={css.top__item}>
              <p className={css.top__number}>1</p>
              <p className={css.top__text}>
                During the discovery call with a client, we provide a free AI
                consulting session on astages, delivery timeline, and team
                breakdown.
              </p>
            </li>
            <li className={css.top__item}>
              <p className={css.top__number}>2</p>
              <p className={css.top__text}>
                During the discovery call with a client, we provide a free AI
                consulting session on astages, delivery timeline, and team
                breakdown.
              </p>
            </li>
            <li className={css.top__item}>
              <p className={css.top__number}>3</p>
              <p className={css.top__text}>
                During the discovery call with a client, we provide a free AI
                consulting session on astages, delivery timeline, and team
                breakdown.
              </p>
            </li>
            <li className={css.top__item}>
              <p className={css.top__number}>4</p>
              <p className={css.top__text}>
                During the discovery call with a client, we provide a free AI
                consulting session on astages, delivery timeline, and team
                breakdown.
              </p>
            </li>
          </ul>
          <img src={blockImage} alt="block" className={css.top__image} />
        </div>
        <ul className={css.works__list}>
          <li className={css.works__item}>
            <h3 className={css.works__subtitle}>
              Object <span className={css.works__span}>Classification</span>
              <span className={css.works__icon}>
                <img src={trueArrowIcon} alt="icon" />
              </span>
            </h3>
            <div className={css.works__content}>
              <img src={blockImage} alt="block" className={css.works__image} />
              <div>
                <p className={css.works__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus.
                </p>
                <p className={css.works__text}>
                  Fermentum eget nec faucibus quam tincidunt eu maecenas. Lorem
                  ipsum dolor sit amet consectetur.
                </p>
                <p className={css.works__text}>
                  Eu elit ut leo dui dolor in. Nullam neque a arcu nibh mattis
                  lacus sem scelerisque. Tincidunt quam semper semper ipsum. Sed
                  gravida neque faucibus semper convallis consequat luctus.
                  Pellentesque et dolor amet sed iaculis eu vitae vitae diam.
                  Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                  eget nec faucibus quam tincidunt eu maecenas. Fermentum eget
                  nec faucibus quam tincidunt eu maecenas.
                </p>
              </div>
            </div>
          </li>
          <li className={css.works__item}>
            <h3 className={css.works__subtitle}>
              <span className={css.works__span}>CONVERTING</span> DETAILED
              <br />
              PRODUCT INFORMATION
              <span className={css.works__icon}>
                <img src={trueArrowIcon} alt="icon" />
              </span>
            </h3>
            <div className={css.works__content}>
              <img src={blockImage} alt="block" className={css.works__image} />
              <div>
                <p className={css.works__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
                <p className={css.works__text}>
                  Eu elit ut leo dui dolor in. Nullam neque a arcu nibh mattis
                  lacus sem scelerisque. Tincidunt quam semper semper ipsum. Sed
                  gravida neque faucibus semper convallis consequat luctus.
                  Pellentesque et dolor amet sed iaculis eu vitae vitae diam.
                  Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                  eget nec faucibus quam tincidunt eu maecenas. Fermentum eget
                  nec faucibus quam tincidunt eu maecenas.
                </p>
              </div>
            </div>
          </li>
          <li className={css.works__item}>
            <h3 className={css.works__subtitle}>
              HOW THE
              <span className={css.works__span}>
                {' '}
                PRODUCT <br /> NAME IS FORMED
              </span>
              <span className={css.works__icon}>
                <img src={trueArrowIcon} alt="icon" />
              </span>
            </h3>
            <div className={css.works__content}>
              <img src={blockImage} alt="block" className={css.works__image} />
              <div>
                <p className={css.works__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
                <p className={css.works__text}>
                  Eu elit ut leo dui dolor in. Nullam neque a arcu nibh mattis
                  lacus sem scelerisque. Tincidunt quam semper semper ipsum. Sed
                  gravida neque faucibus semper convallis consequat luctus.
                  Pellentesque et dolor amet sed iaculis eu vitae vitae diam.
                  Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                  eget nec faucibus quam tincidunt eu maecenas. Fermentum eget
                  nec faucibus quam tincidunt eu maecenas.
                </p>
              </div>
            </div>
          </li>
          <li className={css.works__item}>
            <h3 className={css.works__subtitle}>
              <span className={css.works__span}>MANUAL</span> CONTENT <br />
              MODERATION
              <span className={css.works__icon}>
                <img src={trueArrowIcon} alt="icon" />
              </span>
            </h3>
            <div className={css.works__content}>
              <img src={blockImage} alt="block" className={css.works__image} />
              <div>
                <p className={css.works__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
                <p className={css.works__text}>
                  Eu elit ut leo dui dolor in. Nullam neque a arcu nibh mattis
                  lacus sem scelerisque. Tincidunt quam semper semper ipsum. Sed
                  gravida neque faucibus semper convallis consequat luctus.
                  Pellentesque et dolor amet sed iaculis eu vitae vitae diam.
                  Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                  eget nec faucibus quam tincidunt eu maecenas. Fermentum eget
                  nec faucibus quam tincidunt eu maecenas.
                </p>
              </div>
            </div>
          </li>
          <li className={css.works__item}>
            <h3 className={css.works__subtitle}>
              <span className={css.works__span}>POSTING </span>AND UPDATING
              <br /> PRODUCTS
              <span className={css.works__icon}>
                <img src={trueArrowIcon} alt="icon" />
              </span>
            </h3>
            <div className={css.works__content}>
              <img src={blockImage} alt="block" className={css.works__image} />
              <div>
                <p className={css.works__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas. Lorem ipsum dolor sit
                  amet consectetur.
                </p>
                <p className={css.works__text}>
                  Eu elit ut leo dui dolor in. Nullam neque a arcu nibh mattis
                  lacus sem scelerisque. Tincidunt quam semper semper ipsum. Sed
                  gravida neque faucibus semper convallis consequat luctus.
                  Pellentesque et dolor amet sed iaculis eu vitae vitae diam.
                  Convallis posuere montes mauris porta etiam rhoncus. Fermentum
                  eget nec faucibus quam tincidunt eu maecenas. Fermentum eget
                  nec faucibus quam tincidunt eu maecenas.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
