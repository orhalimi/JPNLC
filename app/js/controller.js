import reactLoader from 'app/reactReloder';
import * as data from 'app/data';

const init = () => reactLoader();


const getConjBaseForms = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjTran);

const getConjtransForms = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjBase);

const getWordAndConjuction = (baseForms, TransForms) => 0;

export {
  init,
  getConjBaseForms,
  getConjtransForms,
  getWordAndConjuction,
};
