import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routers from './Routers';
import './assets/i18n'

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);

registerServiceWorker();