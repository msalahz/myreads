export const bookshelfBooks = shelf => books =>
  books.filter(book => book.shelf === shelf);

export const currentlyReadingBooks = bookshelfBooks('currentlyReading');

export const wantToReadBooks = bookshelfBooks('wantToRead');

export const readBooks = bookshelfBooks('read');

export const makeCancelable = promise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise
      .then(
        val =>
          hasCanceled_ ? reject(new Error('Request canceled')) : resolve(val)
      )
      .catch(
        error =>
          hasCanceled_ ? reject(new Error('Request canceled')) : reject(error)
      );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    }
  };
};
