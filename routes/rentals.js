const express = require('express');
const router = express.Router();

const {
    getRentals,
    getRental,
    createRental,
    closeRental,
    deleteRental
} = require('../controllers/rentals');


router.route('/')
    .get(getRentals)
    .post(createRental);

router.route('/:id')
    .get(getRental)
    .put(closeRental)
    .delete(deleteRental);

module.exports = router;
