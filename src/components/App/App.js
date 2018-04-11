import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookSearch from '../Book/BookSearch';
import BookList from '../Book/BookList';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState(() => ({ books, loading: false }))
    );
  }

  updateBookShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id).concat([book])
        }));
      });
    }
  };

  renderBookList = () => (
    <BookList
      books={this.state.books}
      loading={this.state.loading}
      updateBookShelf={this.updateBookShelf}
    />
  );

  renderBookSearch = () => (
    <BookSearch
      bookshelfBooks={this.state.books}
      updateBookShelf={this.updateBookShelf}
    />
  );

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={this.renderBookList} />
          <Route path="/search" render={this.renderBookSearch} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
