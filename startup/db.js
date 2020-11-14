const mongoose = require('mongoose');
const {logger} = require('./logging');
require('dotenv').config();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/mydb';

module.exports = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            createIndexes: true,
        });
        logger.info('DB connected...')
    } catch (e) {
        logger.info('Connection failed', e);
        process.exit(1);
    }
};

