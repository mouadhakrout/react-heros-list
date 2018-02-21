import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'tether/dist/css/tether.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import HerosList from './app/components/hero/HerosList';
import HeroDetails from './app/components/hero/HeroDetails';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HerosList} />
    <Route path="/hero/:id" component={HeroDetails} />
  </Router>,
  document.getElementById('container')
);
