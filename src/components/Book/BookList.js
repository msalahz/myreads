import React from 'react';
import { Link } from 'react-router-dom';
import { array, func, bool } from 'prop-types';
import Bookshelf from './Bookshelf';
import * as Helpers from '../../Helpers';

const BookList = ({ loading, books, updateBookShelf }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf
          title="Currently Reading"
          loading={loading}
          books={Helpers.currentlyReadingBooks(books)}
          updateBookShelf={updateBookShelf}
        />
        <Bookshelf
          title="Want to Read"
          loading={loading}
          books={Helpers.wantToReadBooks(books)}
          updateBookShelf={updateBookShelf}
        />
        <Bookshelf
          title="Read"
          loading={loading}
          books={Helpers.readBooks(books)}
          updateBookShelf={updateBookShelf}
        />
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
