const mongoose = require('mongoose');
const {Schema} = mongoose;

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	numberInStock: {
		type: Number,
		default: 0
	},
	dailyRentalRate: {
		type: Number,
		default: 0
	},
	genre: {
		type: Schema.Types.ObjectId,
		ref: 'genre',
		required: true
	},
    liked:{
	    type: Boolean,
        default: false,
    }
});

const Movies = mongoose.model('Movies', MovieSchema);

module.exports = Movies;
