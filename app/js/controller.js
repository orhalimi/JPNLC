import reactLoader from 'app/reactReloder';
import * as data from 'app/data';
import { getRandomArrayItem } from 'app/tools/etc';
import * as conjuctions from 'app/tools/conjuctions';

const init = () => reactLoader();

const getConjBaseForms = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjTran);

const getConjtransForms = () => data.conjForms.filter(obj => obj.use !== data.CONST.conjBase);

const conjugateWord = (wordObj, wordtype, transForm) => {
  const { conjuctionType } = data.CONST;
  if (wordObj.exeptions && wordObj.exeptions === transForm) {
    return wordObj.exeptions.transForm;
  }
  switch (transForm) {
    case conjuctionType.masu:
      return conjuctions.toMasuForm(wordObj, wordtype);
    default:
      throw new Error('Error: form wasn\'t found');
  }
};


const getConjuctionData = (baseForms, TransForms) => {
  let baseForm = getRandomArrayItem(Array.from(baseForms));
  let TransForm = getRandomArrayItem(Array.from(TransForms));
  let wordDataObj = getRandomArrayItem(data.words);
  console.log(wordDataObj);
  let retryCounter = 0;
  while (wordDataObj.missing && (wordDataObj.missing.includes(baseForm) || wordDataObj.missing.includes(TransForm))) {
    if (retryCounter >= 5) {
      baseForm = getRandomArrayItem(Array.from(baseForms));
      TransForm = getRandomArrayItem(Array.from(TransForms));
    } else if (retryCounter >= 10) {
      throw new Error('Couldn\'t fetch data');
    }
    wordDataObj = getRandomArrayItem(data.words);
    retryCounter += 1;
  }
  return conjugateWord(wordDataObj.dictionary, wordDataObj.type, TransForm);
};


export {
  init,
  getConjBaseForms,
  getConjtransForms,
  getConjuctionData,
};
