import reactLoader from 'app/reactReloder';
import * as data from 'app/data';
import { getRandomArrayItem, conjugateWord } from 'app/tools';

const init = () => reactLoader();

const getConjBaseForms = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjTran);

const getConjtransForms = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjBase);

const getBaseAndConjuctionWord = (baseForms, TransForms) => {
  let baseForm = getRandomArrayItem(Array.from(baseForms));
  let TransForm = getRandomArrayItem(Array.from(TransForms));
  let wordObj = getRandomArrayItem(data.words);

  let retryCounter = 0;
  while (wordObj.missing.includes(baseForm) || wordObj.missing.includes(TransForm)) {
    if (retryCounter >= 5) {
      baseForm = getRandomArrayItem(Array.from(baseForms));
      TransForm = getRandomArrayItem(Array.from(TransForms));
    } else if (retryCounter >= 10) {
      throw new Error('Couldn\'t fetch data');
    }
    wordObj = getRandomArrayItem(data.words);
    retryCounter += 1;
  }


  return [baseWord, transWord, wordObj];
};


export {
  init,
  getConjBaseForms,
  getConjtransForms,
  getBaseAndConjuctionWord,
};
