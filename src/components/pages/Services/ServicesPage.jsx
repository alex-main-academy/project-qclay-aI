import Blog from './components/Blog/Blog';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Identify from './components/Identify/Identify';
import Impact from './components/Impact/Impact';
import Industry from './components/Industry/Industry';
import Price from './components/Price/Price';
import Process from './components/Process/Process';
import Results from './components/Results/Results';
import Science from './components/Science/Science';
import Service from './components/Service/Service';
import Team from './components/Team/Team';

const Services = () => {
  return (
    <>
      <main>
        <Hero />
        <Science />
        <Service />
        <Industry />
        <Identify />
        <Process />
        <Results />
        <Impact />
        <Cases />
        <Team />
        <Blog />
        <Price />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Services;
