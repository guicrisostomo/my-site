import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import Skill from './Pages/Skills';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/skill" component={Skill} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Error} />
        </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();