const db = require('../data/dbConfig');

module.exports = {
  getBooks,
  getBookBy,
  addBook,
  deleteBook,
};

function getBooks() {
  return db('books');
}

function getBookBy(filter) {
  return db('books')
    .where(filter)
    .first();
}

function addBook(bookData) {
  return db('books')
    .insert(bookData)
    .then(ids => {
      const [id] = ids;

      return getBookBy({id});
    });
}

function deleteBook(id) {
  return db('books')
    .where({id})
    .del();
}
