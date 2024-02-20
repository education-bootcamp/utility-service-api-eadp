const express = require('express');
const reviewController = require('../controller/ReviewController');

const router = express.Router();

router.get('/find-all', reviewController.loadAllReviews);
module.exports = router;
