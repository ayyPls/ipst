import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import {Routes, Route} from 'react-router-dom'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
  );
}