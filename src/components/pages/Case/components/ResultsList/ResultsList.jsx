import Media from 'react-media';
import css from './ResultsList.module.scss';

const ResultsList = () => {
  return (
    <section className={css.results}>
      <div className="container">
        <h2 className={css.results__title}>Results</h2>
        <div className={css.results__border}></div>
        <ul className={css.results__list}>
          <li className={css.results__item}>
            <h3 className={css.results__number}>
              01<span>.</span>
            </h3>
            <Media
              query="(min-width:768px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </p>
              )}
            />
            <Media
              query="(max-width:767px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas.
                </p>
              )}
            />
          </li>
          <li className={css.results__item}>
            <h3 className={css.results__number}>
              02<span>.</span>
            </h3>
            <Media
              query="(min-width:768px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </p>
              )}
            />
            <Media
              query="(max-width:767px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas.
                </p>
              )}
            />
          </li>
          <li className={css.results__item}>
            <h3 className={css.results__number}>
              03<span>.</span>
            </h3>
            <Media
              query="(min-width:768px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </p>
              )}
            />
            <Media
              query="(max-width:767px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas.
                </p>
              )}
            />
          </li>
          <li className={css.results__item}>
            <h3 className={css.results__number}>
              04<span>.</span>
            </h3>
            <Media
              query="(min-width:768px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </p>
              )}
            />
            <Media
              query="(max-width:767px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas.
                </p>
              )}
            />
          </li>
          <li className={css.results__item}>
            <h3 className={css.results__number}>
              05<span>.</span>
            </h3>
            <Media
              query="(min-width:768px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consec tetur lorem ipsum. Dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </p>
              )}
            />
            <Media
              query="(max-width:767px)"
              render={() => (
                <p className={css.results__text}>
                  Lorem ipsum dolor sit amet consectetur. Eu elit ut leo dui
                  dolor in. Nullam neque a arcu nibh mattis lacus sem
                  scelerisque. Tincidunt quam semper semper ipsum. Sed gravida
                  neque faucibus semper convallis consequat luctus. Pellentesque
                  et dolor amet sed iaculis eu vitae vitae diam. Convallis
                  posuere montes mauris porta etiam rhoncus. Fermentum eget nec
                  faucibus quam tincidunt eu maecenas.
                </p>
              )}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ResultsList;
