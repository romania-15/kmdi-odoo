// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/loginPage';
import Register from './pages/RegisterPage';
import Signup from './pages/Signup';
import AdminPanel from './pages/AdminPanel';
import Dashboard from './pages/DashboardPage';
import ItemDetail from './pages/ItemDetailPage';

import './style.css'; // Tailwind or global styles
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/item/:id" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);