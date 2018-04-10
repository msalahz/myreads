import React from 'react';
import { Link } from 'react-router-dom';
import { array, func, bool } from 'prop-types';
import Bookshelf from './Bookshelf';
import BookshelfLoadingPlaceholder from './BookshelfLoadingPlaceholder';
import * as Helpers from '../../Helpers';

const BookList = ({ loading, books, updateBookShelf }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookshelfLoadingPlaceholder loading={loading}>
            <Bookshelf
              loading={loading}
              books={Helpers.currentlyReadingBooks(books)}
              updateBookShelf={updateBookShelf}
            />
          </BookshelfLoadingPlaceholder>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookshelfLoadingPlaceholder loading={loading}>
            <Bookshelf
              loading={loading}
              books={Helpers.wantToReadBooks(books)}
              updateBookShelf={updateBookShelf}
            />
          </BookshelfLoadingPlaceholder>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookshelfLoadingPlaceholder loading={loading}>
            <Bookshelf
              loading={loading}
              books={Helpers.readBooks(books)}
              updateBookShelf={updateBookShelf}
            />
          </BookshelfLoadingPlaceholder>
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
