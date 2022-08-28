import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routers from './Routers';

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);

registerServiceWorker();