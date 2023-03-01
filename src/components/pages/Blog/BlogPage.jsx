import Contact from '../Services/components/Contact/Contact';
import Footer from '../Services/components/Footer/Footer';
import BlogHero from './components/BlogHero/BlogHero';
import OurBlog from './components/OurBlog/OurBlog';

const BlogPage = () => {
  return (
    <main>
      <BlogHero />
      <OurBlog />
      <Contact />
      <Footer />
    </main>
  );
};

export default BlogPage;
