import React from 'react';
import BookCardLoadingPlaceholder from './BookCardLoadingPlaceholder';

const count = Math.floor(window.innerWidth / 180);
const randomKey = () => Math.floor(Math.random() * 10000);

const renderLoading = () => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      {new Array(count)
        .fill(0)
        .map(() => <BookCardLoadingPlaceholder key={randomKey()} />)}
    </ol>
  </div>
);
const BookshelfLoadingPlaceholder = ({ loading, children }) =>
  loading ? renderLoading() : children;

export default BookshelfLoadingPlaceholder;
