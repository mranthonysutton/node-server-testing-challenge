const express = require('express');
const Books = require('../books/booksModel');
const server = express();

server.use(express.json());

server.get('/books', (req, res) => {
  Books.getBooks()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({error: 'Unable to get a list of books.'});
    });
});

server.post('/books', (req, res) => {
  Books.addBook(req.body)
    .then(response => res.status(201).json(response))
    .catch(error => {
      console.log(error);
      res.status(500).json({error: 'Unable to add your new book.'});
    });
});

server.delete('/books/:id', (req, res) => {
  Books.deleteBook(req.params.id)
    .then(response =>
      res.status(200).json({message: 'The book has been deleted.'}),
    )
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({error: 'Unable to delete the book with the specified ID.'});
    });
});

server.use('/', (req, res) => {
  res.status(200).json({api: 'Is up and running...'});
});

module.exports = server;
