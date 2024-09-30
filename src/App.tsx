import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
