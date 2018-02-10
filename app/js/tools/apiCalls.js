import axios from 'axios';
import config from 'app/config';

export function getForms(type) {
  return axios.get(`${config.ApiUrl}/forms/${type}`);
}

export function postUserSelectedForms(baseForms, transForms) {
  return axios.post(`${config.ApiUrl}/conjuctions/user_forms`, { baseForms, transForms });
}


export const options = {
  formsType: {
    baseForms: 'base',
    transForm: 'trans',
  },
};
