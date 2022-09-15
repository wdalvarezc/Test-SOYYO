const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const router = require('./src/routes/index');
const errorHandler = require('./src/utils/middlewares/errorHandler');
const setHeaders = require('./src/utils/middlewares/setHeaders');

/// HEADERS
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(setHeaders);
app.use('/api', router);
app.use(errorHandler);

app.listen(3001, () => {
    console.log(`escuchando en el puerto 3001`);
})