import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import HerosList from './app/components/shared/hero/HerosList';
import HeroDetails from './app/components/shared/hero/HeroDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HerosList} />
    <Route path="/hero/:id" component={HeroDetails} />
  </Router>,
  document.getElementById('container')
);
