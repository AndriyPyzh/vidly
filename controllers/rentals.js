const Rentals = require('../models/Rental');
const asyncHandler = require('express-async-handler');

const getRentals = asyncHandler(async (req, res, next) => {
	const rentals = await Rentals.find().sort('startDate');
	res.send(rentals);
});

const getRental = asyncHandler(async (req, res) => {

	const rental = await Rentals.findOne({_id: req.params.id})
		.populate('customer', 'name -_id');

	if (!rental) {
		res.status(404).send('No such rental');
		return;
	}
	res.send(rental);
});

const closeRental = asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id);
	const {endDate} = res.body;
	const rental = await Rentals.findOneAndUpdate({id: id}, {
		$set: {
			endDate: Date.now()
		}
	});
	res.send(rental);
});

const createRental = asyncHandler(async (req, res) => {
	const {id, customerId, movieId} = req.body;
	const rental = {
		id: id,
		customerId: customerId,
		movieId: movieId
	};
	await Rentals.create(rental);
	res.send(rental);
});

const deleteRental = asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id);
	const rental = await Rentals.deleteOne({id: id});
	res.write(rental);
});

module.exports = {
	getRentals,
	getRental,
	createRental,
	closeRental,
	deleteRental
};
