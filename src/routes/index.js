const express = require('express')
const characterRoutes = require('./character.js');
const houseRoutes = require('./house.js');
const bookRoutes = require('./book.js');

const router = express.Router()

router.use('/characters', characterRoutes);
router.use('/houses', houseRoutes);
router.use('/books', bookRoutes);

module.exports = router