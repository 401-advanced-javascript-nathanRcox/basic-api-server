'use strict';

const express = require('express');
const app = express();

// Middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const routeOne = require('./routes/clothes');
//const routeTwo

app.use(express.json());
app.use(logger);
app.use(routeOne);
//app.use(routeTwo);

app.get('/demo', (req, res) => res.status(200).send('You\'re doing your best. Hang in there.'));

app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Where\'s the port?'); };
    app.listen(port, () => {
      console.log(`Order up on ${port}!`);
    });
  }
}