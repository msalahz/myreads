import React from 'react';
import { array, func, bool } from 'prop-types';
import BookCard from './BookCard';

const renderBooks = (books, updateBookShelf) =>
  books.map(book => (
    <BookCard key={book.id} book={book} updateBookShelf={updateBookShelf} />
  ));

const renderEmptyMessage = () => (
  <li style={{ width: 128, height: 193 }}>No Books</li>
);

const Bookshelf = ({ loading, books, updateBookShelf }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      {!loading && !!books.length
        ? renderBooks(books, updateBookShelf)
        : renderEmptyMessage()}
    </ol>
  </div>
);

Bookshelf.propTypes = {
  books: array.isRequired,
  loading: bool.isRequired,
  updateBookShelf: func.isRequired
};

export default Bookshelf;
