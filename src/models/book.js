const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const BookSchema = new Schema({
    name: String,
    isbn: String,
    authors: [String],
    numberOfPages: String,
    publisher: String,
    country: [String],
    mediaType: [String],
    released: String,
    characters: [String],
    povCharacters: [String]
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book;