import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Skill from './Pages/skills';
import Contact from './Pages/contact';
import Error from './Pages/error';
import Header from './components/header';

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