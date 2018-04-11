import React from 'react';
import { array, func, bool, string } from 'prop-types';
import BookCard from './BookCard';
import BookshelfLoadingPlaceholder from './BookshelfLoadingPlaceholder';

const renderBooks = (books, updateBookShelf) =>
  books.map(book => (
    <BookCard key={book.id} book={book} updateBookShelf={updateBookShelf} />
  ));

const renderEmptyMessage = () => (
  <li style={{ width: 128, height: 193 }}>No Books</li>
);

const Bookshelf = ({ title, loading, books, updateBookShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <BookshelfLoadingPlaceholder loading={loading}>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length
            ? renderBooks(books, updateBookShelf)
            : renderEmptyMessage()}
        </ol>
      </div>
    </BookshelfLoadingPlaceholder>
  </div>
);

Bookshelf.propTypes = {
  books: array.isRequired,
  title: string.isRequired,
  loading: bool.isRequired,
  updateBookShelf: func.isRequired
};

export default Bookshelf;
