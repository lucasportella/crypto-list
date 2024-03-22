import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}
        />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
