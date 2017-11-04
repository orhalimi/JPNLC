import { CONST } from 'app/data';
import { objMap } from 'app/tools/etc';

const { wordTypes, hiragana } = CONST;

const changeCharVol = (fromVol, toVol, char) => (hiragana[toVol][hiragana[fromVol].indexOf(char)]);

const toMasuForm = (wordObj, wordType) => {
  let subAmount = 0;
  let replaceAmount = 0;
  switch (wordType) {
    case wordTypes.ruVerb:
      subAmount = 1;
      replaceAmount = 0;
      break;
    case wordTypes.uVerb:
      subAmount = 0;
      replaceAmount = 1;
      break;
    case wordTypes.suruVerb:
      subAmount = 1;
      replaceAmount = 1;
      break;
    case wordTypes.kuruVerb:
      subAmount = 1;
      replaceAmount = 1;
      break;
    default:
      throw new Error(`wordType ${wordType} is not supported`);
  }
  return objMap(wordObj, (word) => {
    let newWord = word;
    if (subAmount) {
      newWord = word.slice(0, subAmount * (-1));
    }
    if (replaceAmount) {
      const changedChar = changeCharVol('u', 'i', newWord.slice(replaceAmount * (-1)));
      newWord = changedChar ? newWord.slice(0, replaceAmount * (-1)) + changedChar : newWord;
    }
    return `${newWord}ます`;
  });
};


export { toMasuForm };
