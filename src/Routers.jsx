import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Skill from './Pages/Skills';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Header from './components/Header';

export default function AppRoutes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      
      <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}