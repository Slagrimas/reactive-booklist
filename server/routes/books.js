const express= require('express');
const router = express.Router();

const Book = require('../db/models/book');

router.route('/')
.get((req, res) => {
    return Book.fetchAll()
    .then (books => {
        return res.json(books);
    })
    .catch (err => {
        console.log('this is error', err)
        return res.status(400).send('an error has occured');
    });
});


module.exports = router;
