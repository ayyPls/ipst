import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react';
import { getUserData } from './api/getUserData';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {

    const token = localStorage.getItem('token')
    if (token) dispatch(getUserData(token))
  }
  )
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/item/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}