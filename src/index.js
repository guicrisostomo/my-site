import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routers from './routers';

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);

registerServiceWorker();