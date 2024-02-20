const express = require('express');
const cartController = require('../controller/CartController');

const router = express.Router();

router.get('/find-all', cartController.loadAllData);
module.exports = router;
