import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Skill from './pages/Skills/index.jsx';
import Contact from './pages/Contact/index.jsx';
import Error from './pages/Error/index.jsx';
import Projects from './pages/Projects/index.jsx';
import Certificates from './pages/Certificates/index.jsx';
import Updates from './pages/Updates/index.jsx';

export default function AppRoutes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}