import { CONST } from 'app/data';
import { objMap } from 'app/tools/etc';

const { wordTypes, hiragana } = CONST;

const changeCharVowel = (fromVol, toVol, char) => (hiragana[toVol][hiragana[fromVol].indexOf(char)]
);

const subAndReplace = (wordObj, subAmount = 0, replaceAmount = 0, fromVol, toVol, suffix = '') => {
  const newWordObj = objMap(wordObj, (word) => {
    let newWord = word;
    if (subAmount) {
      newWord = word.slice(0, subAmount * (-1));
    }
    if (replaceAmount) {
      const changedChar = changeCharVowel(fromVol, toVol, newWord.slice(replaceAmount * (-1)));
      newWord = changedChar ? newWord.slice(0, replaceAmount * (-1)) + changedChar : newWord;
    }
    return `${newWord + suffix}`;
  });
  return newWordObj;
};

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
  return subAndReplace(wordObj, subAmount, replaceAmount, 'u', 'i', 'ます');
};


export { toMasuForm };
