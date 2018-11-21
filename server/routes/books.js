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
})
.post((req, res)=>{
    const { author, title } = req.body;
    return new Book({
        author,
        title
    })
    .save()
    .then(book => {
        return res.json(book);
    })
    .catch(err => {
       return res.status(400).json({message: err.message, code: err.code})
    })
});
    

module.exports = router;
