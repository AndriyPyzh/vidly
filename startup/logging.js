const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
require('dotenv').config();

const {createLogger, format, transports} = require('winston');


const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({stack: true}),
		format.splat(),
		format.json(),
	),
	defaultMeta: {service: 'vidly'},
	transports: [
		new transports.File({filename: 'logs/error.log', level: 'error'}),
		new transports.File({filename: 'logs/combined.log'})
	]
});


module.exports.init = function () {
	if (process.env.NODE_ENV !== 'production') {
		logger.add(new transports.Console({
			format: format.combine(
				format.colorize(),
				format.prettyPrint(),
				format.simple()
			),
		}));
	}
};

module.exports.logger = logger;
