const express = require('express');
const auth = require('../middleware/auth');
const {
	getMovies,
	getMovie,
	createMovie,
	deleteMovie,
	updateMovie,
	movieLikeToggle
} = require('../controllers/movies');
const router = express.Router();

router.route('/')
	.get(getMovies)
	.post(createMovie);

router.route('/:id')
	.get(getMovie)
	.put(updateMovie)
	.delete(deleteMovie);

router.route('/:id/like')
	.put(movieLikeToggle);


module.exports = router;
