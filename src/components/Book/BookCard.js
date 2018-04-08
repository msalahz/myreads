import React from 'react';
import { object, func } from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const BookCard = ({ book, updateBookshelf }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`
          }}
        />
        <BookshelfChanger book={book} updateBookshelf={updateBookshelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors.join(', ')}</div>
    </div>
  </li>
);

BookCard.propTypes = {
  book: object.isRequired,
  updateBookshelf: func.isRequired
};

export default BookCard;
