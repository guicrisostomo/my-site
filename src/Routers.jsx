import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skill from './pages/Skills';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Header from './components/Header';
import { Projects } from './pages/Projects';

export default function AppRoutes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      
      <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}