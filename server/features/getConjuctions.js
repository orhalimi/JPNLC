import * as data from '../tools/data';
import { getRandomArrayItem } from '../tools/etc';
import * as conjuctions from '../tools/conjuctions';
import CONST from '../tools/const';


const getConjBaseForms = () => data.conjForms.filter(obj => obj.use !== CONST.conjTran);

const getConjTransForms = () => data.conjForms.filter(obj => obj.use !== CONST.conjBase);

const conjugateWord = (wordObj, wordtype, transForm, wordExeptions) => {
  const { conjuctionType } = CONST;
  if (wordExeptions && wordExeptions[transForm]) {
    return wordExeptions[transForm];
  }
  switch (transForm) {
    case conjuctionType.masu:
      return conjuctions.toMasuForm(wordObj, wordtype);
    case conjuctionType.dictionary:
      return wordObj;
    case conjuctionType.te:
      return conjuctions.toTeForm(wordObj, wordtype);
    default:
      throw new Error("Error: form wasn't found");
  }
};

const getConjuctionData = (req, res) => {
  const { baseForms, transForms } = req.body;
  let baseForm = getRandomArrayItem(Array.from(baseForms));
  let transForm = getRandomArrayItem(Array.from(transForms));
  let wordDataObj = getRandomArrayItem(data.words);
  let retryCounter = 0;
  while (
    wordDataObj.missing &&
    (wordDataObj.missing.includes(baseForm) || wordDataObj.missing.includes(transForm))
  ) {
    console.log(wordDataObj);
    if (retryCounter >= 5) {
      baseForm = getRandomArrayItem(Array.from(baseForms));
      transForm = getRandomArrayItem(Array.from(transForms));
    } else if (retryCounter >= 10) {
      throw new Error("Couldn't fetch data");
    }
    wordDataObj = getRandomArrayItem(data.words);
    retryCounter += 1;
  }
  const wordTransObj = {};
  const wordBaseObj = {};
  wordBaseObj.word = conjugateWord(
    wordDataObj.word,
    wordDataObj.type,
    baseForm,
    wordDataObj.exeptions,
  );
  wordTransObj.word = conjugateWord(
    wordDataObj.word,
    wordDataObj.type,
    transForm,
    wordDataObj.exeptions,
  );
  wordBaseObj.form = baseForm;
  wordTransObj.form = transForm;

  res.json([[wordBaseObj, wordTransObj]]);
};

export { getConjBaseForms, getConjTransForms, getConjuctionData };
