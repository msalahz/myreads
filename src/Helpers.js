export const bookshelfBooks = shelf => books =>
  books.filter(book => book.shelf === shelf);

export const currentlyReadingBooks = bookshelfBooks('currentlyReading');

export const wantToReadBooks = bookshelfBooks('wantToRead');

export const readBooks = bookshelfBooks('read');