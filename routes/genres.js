const express = require('express');
const router = express.Router();
const {
    getGenres,
    getGenre,
    createGenre,
    updateGenre,
    deleteGenre
} = require('../controllers/genres');


router.route("/")
    .get(getGenres)
    .post(createGenre);


router.route("/:id")
    .get(getGenre)
    .put(updateGenre)
    .delete(deleteGenre);


module.exports = router;
