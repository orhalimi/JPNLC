import CONST from './const';

const { wordTypes } = CONST;
const {
  ruVerb, uVerb, suruVerb, kuruVerb,
} = wordTypes;
const { conjuctionType } = CONST;

const conjForms = [
  { id: conjuctionType.masu, text: 'masu form', use: CONST.conjBoth },
  { id: conjuctionType.te, text: 'Te form', use: CONST.conjBoth },
  { id: conjuctionType.dictionary, text: 'dictionary form', use: CONST.conjBoth },
];

const words = [
  {
    word: { kanji: '食べる', hiragana: 'たべる' },
    type: ruVerb,
    translate: 'to eat',
    // missing: [conjuctionType.masu],
    // exeptions: { masu: { kanji: '食べまます', hiragana: 'たべまます' } },
  },
  {
    word: { kanji: '聞く', hiragana: 'きく' },
    translate: 'to hear; to ask',
    type: uVerb,
  },
  {
    word: { kanji: 'する', hiragana: 'する' },
    translate: 'to do',
    type: suruVerb,
  },
  {
    word: { kanji: '来る', hiragana: 'くる' },
    translate: 'to go',
    type: kuruVerb,
  },
];

export {
  CONST,
  conjForms,
  words
};
