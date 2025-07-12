import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddItem from './pages/AddItem';
import ItemDetail from './pages/ItemDetail';
import AdminPanel from './pages/AdminPanel';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}