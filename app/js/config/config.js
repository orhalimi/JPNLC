import { merge } from 'lodash';

const envTypes = {
  dev: 'development',
  prod: 'production',
};

if (process.env.NODE_ENV === 'development') {
  console.log(`we are on ${process.env.NODE_ENV} environment!`);
}
const config =
{
  env: process.env.NODE_ENV || envTypes.dev,
};

const envConfig = require(`./${config.env}`); // eslint-disable-line import/no-dynamic-require

export default merge(config, envConfig);
