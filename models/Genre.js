const mongoose = require('mongoose');

const {Schema} = mongoose;

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 5
    }
});

const Genres = mongoose.model('genre', GenreSchema);

module.exports.Genres = Genres;
module.exports.GenreSchema = GenreSchema;
