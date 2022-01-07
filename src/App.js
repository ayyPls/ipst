import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
export default function App() {
  const products = useSelector(state => state.products)
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/item/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* если url не совпаадет ни с одним из списка? */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}