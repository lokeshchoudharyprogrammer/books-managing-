const express = require('express');
const mongoose = require('mongoose');
const BookModel = require('../models/Book.Model');

const booksRouter = express.Router()

booksRouter.get('/', async (req, res) => {
   res.send("<h1>Hey welcome to books store</h1>")
});

booksRouter.post('/books', async (req, res) => {
    console.log(req.body)
    try {
        const book = new BookModel(req.body);
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: 'Unable to add a new book.' });
    }
});

booksRouter.get('/books', async (req, res) => {
    try {

        const books = await BookModel.find();
        res.json(books);
    } catch (error) {
        res.json(error);

    }
});

booksRouter.get('/books/:id', async (req, res) => {

    try {
        const book = await BookModel.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }

    } catch (error) {
        res.status(404).json({ error: 'Book not found' });

    }
});

booksRouter.put('/books/:id', async (req, res) => {

    try {
        const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }

    } catch (error) {
        res.status(404).json({ error: 'Book not found' });

    }
});

booksRouter.delete('/books/:id', async (req, res) => {
    try {
        const book = await BookModel.findByIdAndRemove(req.params.id);
        if (book) {
            res.json({ message: 'Book deleted' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }

    } catch (error) {
        res.status(404).json({ error: 'Book not found' });

    }
});


module.exports = { booksRouter }