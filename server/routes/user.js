
const express = require('express');
const auth = require('../features/auth');

const routes = express.Router();

routes.post('/', auth.isLoginParametersExist, auth.verifyloginInfo);

module.exports = routes;

