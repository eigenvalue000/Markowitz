const mongoose = require('mongoose');

const { Schema } = mongoose;

const stockSchema = new Schema({
    symbol: {
        type: String,
        required: true,
        trim: true
    }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;