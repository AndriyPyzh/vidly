const mongoose = require('mongoose');
const {Schema} = mongoose;

const RentalSchema = new Schema({
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        required: false
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        ref: 'customers',
        required: true
    },
    movie: {
        type: mongoose.Schema.ObjectId,
        ref: 'movies',
        required: true
    },
    fee:{
        type:Number,
        default: 10
    }
});

const Rentals = mongoose.model('rentals', RentalSchema);

module.exports = {RentalSchema, Rentals};
