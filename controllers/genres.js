const asyncHandler = require('express-async-handler');
const auth = require('../middleware/auth');
const {Genres} = require('../models/Genre');

const getGenres = asyncHandler(async (req, res, next) => {
	const genres = await Genres.find().sort('id').select('-__v');
	res.send(genres);
});


const getGenre = asyncHandler(async (req, res, next) => {
	const genre = await Genres.findOne({_id: req.params.id});

	if (!genre) {
		res.status(404).send("Genre not found");
		return;
	}

	res.status(200).send(genre);
});

const createGenre = asyncHandler(async (req, res, next) => {
	const genre = {name: req.body};

	Genres.create(genre);

	res.status(201).send(genre);
});


const updateGenre = asyncHandler(async (req, res, next) => {
	const genre = await Genres.findOneAndUpdate(
		{_id: req.params.id},
		{name: req.body.name},
		{new: true});

	res.status(203).send(genre);
});


const deleteGenre = asyncHandler(async (req, res, next) => {
	const genre = await Genres.findOneAndDelete({_id: req.params.id});
	res.send(genre);
});


module.exports = {
	getGenres,
	getGenre,
	createGenre,
	updateGenre,
	deleteGenre
};
