const request = require('supertest');
const server = require('../data/server.js');
const Books = require('./booksModel');
const db = require('../data/dbConfig');

describe('Books Model', function() {
  describe('GET /books', function() {
    it('should return a 200 OK', function() {
      return request(server)
        .get('/books')
        .then(response => {
          expect(response.status).toBe(200);
        });
    });

    it('should return a JSON object', function() {
      return request(server)
        .get('/books')
        .then(response => {
          expect(response.type).toMatch(/json/i);
        });
    });
  });

  describe('POST /books', function() {
    it('should return a 201 Created', function() {
      return request(server)
        .post('/books')
        .send({title: 'Test Title', author: 'Test Author', pages: 50})
        .then(response => {
          expect(response.status).toBe(201);
        });
    });

    it('should return a {error: "Unable to add your new book."}', function() {
      return request(server)
        .post('/books')
        .then(response => {
          expect(response.body.error).toBe('Unable to add your new book.');
        });
    });
  });

  // Delete book works, however, need to pass in a book ID which will fail if a proper id is not added
  describe('DELETE /books/:id', function() {
    it('should return a 0 since this object no longer exists in the DB', async function() {
      let deletedRecord = await Books.deleteBook(2);
      expect(deletedRecord).toEqual(0);
    });

    it('Should return "The book has been deleted."', function() {
      return request(server)
        .delete('/books/1')
        .then(response => {
          expect(response.body.message).toBe('The book has been deleted.');
        });
    });
  });
});
