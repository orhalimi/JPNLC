import { getConjuctionData } from '../features/getConjuctions';

const express = require('express');

const apiRoutes = express.Router();

apiRoutes.get('/conjuctions', (req, res) => {
  getConjuctionData(req, res);
});

module.exports = apiRoutes;
