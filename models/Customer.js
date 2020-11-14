const mongoose = require('mongoose');

const {Schema} = mongoose;

const CustomerSchema = new Schema({
    isGold: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
});

const Customers = mongoose.model('Customer', CustomerSchema);

module.exports = {Customers, CustomerSchema};
