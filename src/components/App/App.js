import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BookSearch from '../Book/BookSearch';
import BookList from '../Book/BookList';
import './App.css';

const { resolve, reject } = Promise;

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
      return resolve();
    }
    return reject('Invalid bookshelf');
  };

  renderBookList = () => (
    <BookList
      books={this.state.books}
      loading={this.state.loading}
      updateBookShelf={this.updateBookShelf}
    />
  );

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={this.renderBookList} />
          <Route path="/search" component={BookSearch} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
