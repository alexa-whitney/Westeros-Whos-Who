const express = require('express');
const iceAndFire = require('api-iceandfire');

const router = express.Router();

router.get('/', (req, res) => {
  // Retrieve a list of characters from the API
  iceAndFire.get('/characters').then((response) => {
    // Render the characters index page and pass the character data to the view
    res.render('characters/index', { characters: response.data });
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error retrieving characters from API');
  });
});

module.exports = router;
