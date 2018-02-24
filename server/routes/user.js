
const express = require('express');
const usersHandler = require('../features/usersHandler');

const routes = express.Router();


routes.post('/', usersHandler.isLoginParametersExist, usersHandler.verifyloginInfo);
routes.post('/new', usersHandler.isLoginParametersExist, usersHandler.createNewUser);

module.exports = routes;

