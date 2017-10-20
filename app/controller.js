import reactLoader from './reactReloder';
import * as data from './data.js';

const init = () => reactLoader();


const getConjBaseForm = () => {
  return data.conjForms.filter(obj => obj.use != data.CONST.conjTran);
}

const getConjtransForm = () => {
  return data.conjForms.filter(obj => obj.use != data.CONST.conjBase);
}

export {
  init,
  getConjBaseForm,
  getConjtransForm,
};