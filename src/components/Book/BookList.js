import React from 'react';
import { Link } from 'react-router-dom';
import { array, func, bool } from 'prop-types';
import Bookshelf from './Bookshelf';
import BookshelfLoadingBlacholder from './BookshelfLoadingPlacholder';

const bookshelfBooks = shelf => books =>
  books.filter(book => book.shelf === shelf);
const currentlyReadingBooks = bookshelfBooks('currentlyReading');
const wantToReadBooks = bookshelfBooks('wantToRead');
const readBooks = bookshelfBooks('read');

const BookList = ({ loading, books, updateBookShelf }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookshelfLoadingBlacholder loading={loading}>
            <Bookshelf
              loading={loading}
              books={currentlyReadingBooks(books)}
              updateBookShelf={updateBookShelf}
            />
          </BookshelfLoadingBlacholder>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookshelfLoadingBlacholder loading={loading}>
            <Bookshelf
              loading={loading}
              books={wantToReadBooks(books)}
              updateBookShelf={updateBookShelf}
            />
          </BookshelfLoadingBlacholder>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookshelfLoadingBlacholder loading={loading}>
            <Bookshelf
              loading={loading}
              books={readBooks(books)}
              updateBookShelf={updateBookShelf}
            />
          </BookshelfLoadingBlacholder>
        </div>
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

BookList.propTypes = {
  books: array.isRequired,
  loading: bool.isRequired,
  updateBookShelf: func.isRequired
};

export default BookList;
