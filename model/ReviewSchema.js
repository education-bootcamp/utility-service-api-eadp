const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        star: {
            type: Number,
            required: true
        },
        user: {
            type: Number,
            required: true
        },
        product: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('review', reviewSchema);
