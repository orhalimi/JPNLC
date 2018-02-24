import { getConjuctionData } from '../features/getConjuctions';

const express = require('express');

const routes = express.Router();

routes.post('/user_forms', (req, res) => {
  getConjuctionData(req, res);
});

module.exports = routes;
