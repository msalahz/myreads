import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={ListBooks} />
          <Route path="/search" component={SearchBooks} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
