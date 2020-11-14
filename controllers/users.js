const bcrypt = require('bcrypt');
const {Users: Users} = require('../models/User');
const asyncHandler = require('express-async-handler');
const HttpStatus = require('http-status-codes');

const registerUser = asyncHandler(async (req, res) => {
	const {name, email, password} = req.body;

	let user = await Users.findOne({email: email});

	if (user) {
		return res.status(HttpStatus.BAD_REQUEST).send('User already registered');
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	user = new Users({
		name: name,
		email: email,
		password: hashedPassword
	});

	await user.save();

	res.status(HttpStatus.CREATED).send("Successfully registered");
});


module.exports = {registerUser};
