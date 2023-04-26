const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const HouseSchema = new Schema({
    name: String,
    region: String,
    coatOfArms: String,
    words: String,
    titles: [String],
    seats: [String],
    currentLord: String,
    heir: String,
    overlord: String,
    founded: String,
    founder: String,
    diedOut: String,
    ancestralWeapons: [String],
    cadetBranches: [String],
    swornMembers: [String]
})

const House = mongoose.model('House', HouseSchema)

module.exports = House;