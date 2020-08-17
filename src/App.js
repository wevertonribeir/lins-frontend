import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Admin from './Components/Pages/Admin/Admin';
import Cliente from './Components/Pages/Cliente/Cliente';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <ProtectedRoute path="/admin" element={<Admin />} nivel="1" />
            <ProtectedRoute path="/cliente" element={<Cliente />} nivel="2" />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
