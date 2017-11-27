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
  const fromVol = 'u';
  const toVol = 'i';
  const suffix = 'ます';

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
  return subAndReplace(wordObj, subAmount, replaceAmount, fromVol, toVol, suffix);
};

const toTeForm = (wordObj, wordType) => {
  const subAmount = 1;
  let replaceAmount = 0;
  const fromVol = 'u';
  const toVol = 'i';
  let suffix = '';

  switch (wordType) {
    case wordTypes.ruVerb:
      suffix = 'て';
      break;
    case wordTypes.uVerb:
      switch (wordObj.hiragana[wordObj.hiragana.length - 1]) {
        case 'く':
          suffix = 'いて';
          break;
        case 'ぐ':
          suffix = 'いで';
          break;
        case 'し':
          suffix = 'して';
          break;
        case 'る':
        case 'う':
        case 'つ':
          suffix = 'って';
          break;
        case 'ぬ':
        case 'ぶ':
        case 'む':
          suffix = 'んで';
          break;
        default:
          throw new Error(`char ${wordObj.hiragana[wordObj.hiragana.length - 1]} doesn't have te conjuction`);
      }
      break;
    case wordTypes.suruVerb:
    case wordTypes.kuruVerb:
      suffix = 'て';
      replaceAmount = 1;
      break;
    default:
      throw new Error(`wordType ${wordType} is not supported`);
  }
  return subAndReplace(wordObj, subAmount, replaceAmount, fromVol, toVol, suffix);
};


export { toMasuForm, toTeForm };
