const Customer = require('../models/Customer');
const asyncHandler = require('express-async-handler');

const getCustomers = asyncHandler(async (req, res, next) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

const getCustomer = asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id);
    const customer = await Customer.findOne({id: id});
    if (!customer) {
        res.status(404).send('No such customer!');
        return;
    }
    res.send(customer);
});

const createCustomer = asyncHandler(async (req, res, next) => {
    const {name, phone, isGold = false} = req.body;

    const customer = {name: name, phone: phone, isGold: isGold};

    await Customer.create(customer);

    res.send(customer);

});

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer
};
