const express = require('express');
const router = express.Router();
const ownersController = require('../controllers/ownersController')

router.get('/', ownersController.getOwners);


module.exports = router