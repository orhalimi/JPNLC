

const express = require('express');

const formsRoute = require('./forms');
const conjuctionsRoute = require('./conjuctions');
const usersRoute = require('./user');

const apiRoutes = express.Router();

apiRoutes.use('/forms', formsRoute);
apiRoutes.use('/conjuctions', conjuctionsRoute);
apiRoutes.use('/user', usersRoute);

module.exports = apiRoutes;
