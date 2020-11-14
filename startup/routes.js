const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/genres', genres);
    app.use('/customers', customers);
    app.use('/movies', movies);
    app.use('/rentals', rentals);
    app.use('/users', users);
    app.use(error);
};
