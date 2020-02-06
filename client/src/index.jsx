import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Reviews from './Reviews';

ReactDOM.render(
  <Router>
    <Route path="/:productId" component={Reviews} />
    <Route path="/" component={Reviews} />
  </Router>,
  document.getElementById('reviews'),
);
