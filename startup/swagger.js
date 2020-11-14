const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: swaggerDocument,
    apis: ['app.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = function (app) {
    app.use('/swagger',
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec));
};
