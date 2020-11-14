const {logger} = require('../startup/logging');

module.exports = (err, req, res) => {

	logger.error(err.message, err);

	res.status(err.status || 500)
		.send(err.message || 'Something failed.');
};
