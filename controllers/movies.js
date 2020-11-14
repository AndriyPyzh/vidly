const Movies = require('../models/Movie');
const asyncHandler = require('express-async-handler');


const getMovies = asyncHandler(async (req, res, next) => {
	const movies = await Movies.find().populate('genre').select('-__v');
	res.status(200).send(movies);
});

const getMovie = asyncHandler(async (req, res) => {

	const id = req.params.id;

	// if (!mongoose.Types.ObjectId.isValid(id))
	// 	return res.status(404).send('No such movie');

	const movie = await Movies.findById(id).populate('genre').select('-__v');

	if (!movie) {
		return res.status(404).send('No such movie');
	}
	res.status(200).send(movie);
});

const createMovie = asyncHandler(async (req, res) => {
	const {title, numberInStock, dailyRentalRate, genre} = req.body;

	const movie = {
		title,
		numberInStock,
		dailyRentalRate,
		genre
	};

	await Movies.create(movie);
	res.status(201).send(movie);
});

const updateMovie = asyncHandler(async (req, res) => {

	const {_id, title, numberInStock, dailyRentalRate, genre} = req.body;

	const movie = {
		title,
		numberInStock,
		dailyRentalRate,
		genre
	};

	await Movies.findByIdAndUpdate(_id, movie);
	res.send(movie);
});

const deleteMovie = asyncHandler(async (req, res) => {

	const movie = await Movies.findByIdAndDelete(req.params.id);

	res.send(movie);
});

const movieLikeToggle = asyncHandler(async (req, res) => {
	const {id} = req.params;

	const movie = await Movies.findById(id);

	movie.liked = !movie.liked;

	await Movies.findByIdAndUpdate(id, movie);

	res.send(movie);
});

module.exports = {
	getMovies,
	getMovie,
	createMovie,
	updateMovie,
	deleteMovie,
	movieLikeToggle
};
