import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { Routes, Route } from 'react-router-dom'
import Product from './Product';
import PageNotFound from './PageNotFound';
import { useSelector } from 'react-redux';
import ProductPage from './ProductPage';
export default function App() {
  const products = useSelector(state => state.products)
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/item/:id" element={<ProductPage />} />
      {/* если url не совпаадет ни с одним из списка? */}
      <Route component={PageNotFound} />
    </Routes>
  );
}