import reactLoader from 'app/reactReloder';
import * as data from 'app/data';

const init = () => reactLoader();


const getConjBaseForm = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjTran);

const getConjtransForm = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjBase);

export {
  init,
  getConjBaseForm,
  getConjtransForm,
};
