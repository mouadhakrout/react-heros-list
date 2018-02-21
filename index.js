import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { Router, Route, browserHistory } from 'react-router';
import 'tether/dist/css/tether.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import HerosList from './app/components/hero/HerosList';
import HeroDetails from './app/components/hero/HeroDetails';
import configureStore from './app/store/configureStore';
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HerosList} />
      <Route path="/hero/:id" component={HeroDetails} />
    </Router>
  </Provider>,
  document.getElementById('container')
);
