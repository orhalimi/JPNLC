

import { getConjBaseForms, getConjTransForms } from '../features/getConjuctions';

const express = require('express');

const routes = express.Router();
const options = {
  baseForms: 'base',
  transForm: 'trans',
};

routes.get('/:type', (req, res, next) => {
  switch (req.params.type) {
    case options.baseForms:
      res.json(getConjBaseForms());
      break;
    case options.transForm:
      res.json(getConjTransForms());
      break;

    default:
      next(new Error('form type not found'));
      break;
  }
});

module.exports = routes;
