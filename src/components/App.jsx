import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/Blog/BlogPage';
import Case from './pages/Case/CasePage';
import Services from './pages/Services/ServicesPage';
import UsesCases from './pages/UsesCases/UsesCasesPage';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Services />} />
      <Route path="cases" element={<UsesCases />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="case" element={<Case />} />
    </Routes>
  );
};
