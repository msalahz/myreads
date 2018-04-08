import React from 'react';
import { array, func, bool } from 'prop-types';
import BookCard from './BookCard';

const renderBooks = (books, updateBookshelf) =>
  books.map(book => (
    <BookCard key={book.id} book={book} updateBookshelf={updateBookshelf} />
  ));

const renderEmptyMessage = () => (
  <li style={{ width: 128, height: 193 }}>No Books</li>
);

const Bookshelf = ({ loading, books, updateBookshelf }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      {!loading && !!books.length
        ? renderBooks(books, updateBookshelf)
        : renderEmptyMessage()}
    </ol>
  </div>
);

Bookshelf.propTypes = {
  books: array.isRequired,
  loading: bool.isRequired,
  updateBookshelf: func.isRequired
};

export default Bookshelf;
