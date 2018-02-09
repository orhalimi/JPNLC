import axios from 'axios';
import config from 'app/config';

export function getForms(type) {
  return axios.get(`${config.ApiUrl}/forms/${type}`);
}
export const options = {
  formsType: {
    baseForms: 'base',
    transForm: 'trans',
  },
};
