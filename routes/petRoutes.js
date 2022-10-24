const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController.js');


router.get('/', petsController.getPets);
router.get('/:id', petsController.getSinglePet);
router.post('/', petsController.addPets)


module.exports = router;