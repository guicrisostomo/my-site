import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './Pages/Home';
import Skill from './Pages/Skills';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

registerServiceWorker();