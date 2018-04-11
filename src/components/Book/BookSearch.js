import React from 'react';
import { Link } from 'react-router-dom';
import { func, array } from 'prop-types';
import BookCard from './BookCard';
import BookshelfLoadingPlaceholder from './BookshelfLoadingPlaceholder';
import * as BooksAPI from '../../BooksAPI';
import { makeCancelable } from '../../Helpers';

class BookSearch extends React.Component {
  state = {
    query: '',
    books: [],
    loading: false
  };

  componentDidUpdate(prevProps) {
    const { stringify } = JSON;
    const { bookshelfBooks } = this.props;
    const prevBookshelfBooks = prevProps.bookshelfBooks;

    if (
      stringify(prevBookshelfBooks) !== stringify(bookshelfBooks) &&
      this.state.query !== ''
    ) {
      this.updateState(this.state.books);
    }
  }

  updateState = books => {
    const { bookshelfBooks } = this.props;
    const bookshelfBooksObj = bookshelfBooks.reduce(
      (acc, book) => ({ ...acc, [book.id]: book }),
      {}
    );

    this.setState(() => ({
      books: books.map(
        b => (bookshelfBooksObj[b.id] ? bookshelfBooksObj[b.id] : b)
      ),
      loading: false
    }));
  };

  resetState = () =>
    this.setState(() => ({ books: [], loading: false }), () => {});

  handleQueryChange = e => {
    const query = e.target.value;
    this.setState(() => ({ query, loading: true }));

    if (query !== '') {
      if (this.request && this.request.cancel) {
        this.request.cancel();
      }

      this.request = makeCancelable(BooksAPI.search(query));
      this.request.promise
        .then(books => {
          if (Array.isArray(books)) {
            this.updateState(books);
          } else {
            this.resetState();
          }
        })
        .catch(err => {
          if (err.message !== 'Request canceled') {
            throw err;
          }
        });
    } else {
      this.resetState();
    }
  };

  render() {
    const { updateBookShelf } = this.props;
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
                    updateBookShelf={updateBookShelf}
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
