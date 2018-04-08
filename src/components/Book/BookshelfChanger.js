import React from 'react';
import { object, func } from 'prop-types';

class BookshelfChanger extends React.Component {
  handleChange = e => {
    const { book, updateBookShelf } = this.props;
    updateBookShelf(book, e.target.value);
  };

  render() {
    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf} onChange={this.handleChange}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

BookshelfChanger.propTypes = {
  book: object.isRequired,
  updateBookShelf: func.isRequired
};

export default BookshelfChanger;
