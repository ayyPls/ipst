import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import {Routes, Route} from 'react-router-dom'
import Product from './Product';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/item/:id" element={<Product/>} />
    </Routes>
  );
}