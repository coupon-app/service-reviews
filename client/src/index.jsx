import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Reviews from './Reviews';

ReactDOM.render(
  <Router>
    <Route exact path="/:productId" component={Reviews} />
    <Route exact path="/" component={Reviews} />
  </Router>,
  document.getElementById('reviews'),
);
