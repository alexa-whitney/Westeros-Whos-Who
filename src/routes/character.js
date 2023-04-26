const express = require('express');
const router = express.Router();
const axios = require('axios');
const Character = require('../models/character.js');

/** Route to get all characters **/
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        if (characters.length === 0) {
            const response = await axios.get('https://www.anapioficeandfire.com/api/characters');
            for (let i = 0; i < response.data.length; i++) {
                const character = new Character({
                    name: response.data[i].name,
                    gender: response.data[i].gender,
                    culture: response.data[i].culture,
                    born: response.data[i].born,
                    died: response.data[i].died,
                    aliases: response.data[i].aliases,
                    playedBy: response.data[i].playedBy
                });
                await character.save();
                characters.push(character);
            }
        }
        res.json(characters);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
    }
});

/** Route to get specific character by ID **/
router.get('/:characterId', async (req, res) => {
    try {
        const character = await Character.findById(req.params.characterId);
        if (!character) {
            return res.status(404).json({ msg: 'Character not found' });
        }
        res.json(character);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ error: err.message });
    }
});

/** Route to add a new book. */

module.exports = router;
