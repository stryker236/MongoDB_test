const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    }
});

const TestModel = mongoose.model('Test', testSchema);

module.exports = TestModel;