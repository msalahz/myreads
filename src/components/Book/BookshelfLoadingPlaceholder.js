import React from 'react';
import BookCardLoadingPlaceholder from './BookCardLoadingPlaceholder';

const renderLoading = () => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      <BookCardLoadingPlaceholder />
      <BookCardLoadingPlaceholder />
      <BookCardLoadingPlaceholder />
    </ol>
  </div>
);
const BookshelfLoadingPlaceholder = ({ loading, children }) =>
  loading ? renderLoading() : children;

export default BookshelfLoadingPlaceholder;
