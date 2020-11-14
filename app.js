const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(cors());

require('./startup/logging').init();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/swagger')(app);

app.use('/static', express.static('static'))

app.use(helmet());
app.use(morgan('tiny'));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
