import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index.jsx';
import Skill from './Pages/Skills/index.jsx';
import Error from './Pages/Error/index.jsx';
import Projects from './Pages/Projects/index.jsx';
import Certificates from './Pages/Certificates/index.jsx';
import Updates from './Pages/Updates/index.jsx';

export default function AppRoutes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}