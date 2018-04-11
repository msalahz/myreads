import React from 'react';
import { object, func } from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const style = book => ({
  width: 128,
  height: 193,
  backgroundImage: `url("${book &&
    book.imageLinks &&
    book.imageLinks.thumbnail}")`
});

const BookCard = ({ book, updateBookShelf }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style(book)} />
        <BookshelfChanger book={book} updateBookShelf={updateBookShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book && book.authors && book.authors.join(', ')}
      </div>
    </div>
  </li>
);

BookCard.propTypes = {
  book: object.isRequired,
  updateBookShelf: func.isRequired
};

export default BookCard;
