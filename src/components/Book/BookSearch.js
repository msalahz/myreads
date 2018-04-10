import React from 'react';
import { Link } from 'react-router-dom';
import { func, array } from 'prop-types';
import BookCard from './BookCard';
import BookshelfLoadingPlaceholder from './BookshelfLoadingPlaceholder';
import * as BooksAPI from '../../BooksAPI';
import { makeCancelable } from '../../Helpers';

// eslint-disable-next-line react/prefer-stateless-function
class BookSearch extends React.Component {
  state = {
    query: '',
    books: [],
    loading: false
  };

  resetState = () =>
    this.setState(() => ({ books: [], loading: false }), () => {});

  updateState = books => {
    const { bookshelfBooks } = this.props;
    const bookshelfBooksObj = bookshelfBooks.reduce(
      (acc, book) => ({ ...acc, [book.id]: book }),
      {}
    );
    this.setState(() => {
      const booksWithShelf = books.map(
        book => (bookshelfBooksObj[book.id] ? bookshelfBooksObj[book.id] : book)
      );
      return { books: booksWithShelf, loading: false };
    });
  };

  handleQueryChange = async e => {
    const query = e.target.value;
    this.setState(() => ({ query, loading: true }));

    if (query) {
      if (this.request && this.request.cancel) {
        this.request.cancel();
      }

      this.request = makeCancelable(BooksAPI.search(query));
      try {
        const books = await this.request.promise.catch();

        if (Array.isArray(books)) {
          this.updateState(books);
        } else {
          this.resetState();
        }
      } catch (err) {
        if (err.message !== 'Request canceled') {
          throw err;
        }
      }
    } else {
      this.resetState();
    }
  };

  handleUpdateBookShelf = async (book, shelf) => {
    await this.props.updateBookShelf(book, shelf).catch();
    this.updateState(this.state.books);
  };

  render() {
    const { query, books, loading } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={this.handleQueryChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookshelfLoadingPlaceholder loading={loading}>
              {query &&
                books.map(book => (
                  <BookCard
                    key={book.id}
                    book={book}
                    updateBookShelf={this.handleUpdateBookShelf}
                  />
                ))}
            </BookshelfLoadingPlaceholder>
          </ol>
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  bookshelfBooks: array.isRequired,
  updateBookShelf: func.isRequired
};

export default BookSearch;
