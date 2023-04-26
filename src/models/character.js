const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const CharacterSchema = new Schema({
    name: String,
    gender: String,
    culture: String,
    born: String,
    died: String,
    titles: [String],
    aliases: [String],
    father: String,
    mother: String,
    spouse: String,
    allegiances: [String],
    books: [String],
    povBooks: [String],
    tvSeries: [String],
    playedBy: [String],
    house: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'House'
      }
})

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character;