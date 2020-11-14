const bcrypt = require('bcrypt');
const {generateAccessToken} = require('../utils/tokens');
const {Users: Users} = require('../models/User');
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async (req, res) => {
	const {email, password} = req.body;

	const user = await Users.findOne({email: email});

	if (!user) {
		return res.status(400).send('Invalid email or password');
	}

	const comparePassword = await bcrypt.compare(password, user.password);

	if (!comparePassword) {
		return res.status(400).send('Invalid email or password');
	}

	const token = generateAccessToken(email);

	res.send(token);
});

module.exports.loginUser = loginUser;
