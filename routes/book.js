const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// GET/allBooks
// .../api/books
router.get('/', async (req, res) => {
    const books = await Book.find();
    try {
        return res.status(200).json(books)
    } catch (error) {
        return res.status(500).json({message: "Couldn't get books"});
    }
});

// GET/book/:id -> singleBook
router.get('/book/:id', async (req,res) => {
    const { id } = req.params;
    const singleBook = await Book.findById(id);
    try {
        return res.status(200).json(singleBook);
    } catch (error) {
        return res.status(500).json({message: "Couldn't retrieve the book"})
    }
})

// GET/bookById
// .../api/books/book
router.post("/book", async (req, res) => {
    const bookToCreate = await Book.create(req.body);
    try {
        return res.status(201).json(bookToCreate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't create book"});
    }
})

// PUT/book -> update
router.put("/book/:id", async (req, res) => {
    const { id } = req.params;
    const bookToUpdate = await Book.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(bookToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Couldn't update the book"});
    }
})

// DELETE/book/Id
router.delete("/book/:id", async (req, res) => {
    const { id } = req.params;
    const bookToDelete = await Book.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: "Successfuly delete the book"})
    } catch (error) {
        return res.status(500).json({message: "Couldn't delete the book"})        
    }
})

module.exports = router;