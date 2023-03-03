import Contact from '../Services/components/Contact/Contact';
import Footer from '../Services/components/Footer/Footer';
import CaseHero from './components/CaseHero/CaseHero';
import Products from './components/Products/Products';
import Result from './components/Result/Result';
import ResultsList from './components/ResultsList/ResultsList';
import Works from './components/Works/Works';

const Case = () => {
  return (
    <main>
      <CaseHero />
      <Products />
      <Works />
      <Result />
      <ResultsList />
      <Contact />
      <Footer />
    </main>
  );
};

export default Case;
