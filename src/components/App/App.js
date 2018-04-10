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

  updateBookShelf = async (book, shelf) => {
    const updatedBooks = await BooksAPI.update(book, shelf);
    const updatedShelf = updatedBooks[shelf];

    if (shelf === 'none' || (updatedShelf && updatedShelf.includes(book.id))) {
      const updatedBook = { ...book, shelf };

      this.setState(({ books }) => {
        const oldBooks = books.filter(({ id }) => id !== updatedBook.id);
        return { books: [...oldBooks, updatedBook] };
      });
      return Promise.resolve(this.state.books);
    }
    return Promise.reject(new Error('Invalid bookshelf'));
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
