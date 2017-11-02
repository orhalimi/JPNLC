
const CONST = {
  conjBase: 'base',
  conjTrans: 'transaction',
  conjBoth: 'both',
  wordType: {
    ruVerb: 'ru verb',
    uVerb: 'u verb',
    suruVerb: 'suru verb',
    kuruVerb: 'kuru verb',
  },
  conjuctionType: {
    masu: 'masu',
    te: 'te',
    dictionary: 'dictionary',
  },
};
const {
  ruVerb, uVerb, suruVerb, kuruVerb,
} = CONST.wordType;
const { conjuctionType } = CONST;

const conjForms = [
  { id: conjuctionType.masu, text: 'masu form', use: CONST.conjBoth },
  { id: conjuctionType.te, text: 'Te form', use: CONST.conjBoth },
  { id: conjuctionType.dictionary, text: 'dictionary form', use: CONST.conjBoth },
];

const words = [
  {
    dictionary: { kanji: '食べる', hiragana: 'たべる' },
    type: ruVerb,
    translate: 'to eat',
    missing: [conjuctionType.te],
    exeptions: { masu: 'たべまます' },
  },
  {
    dictionary: { kanji: '聞く', hiragana: 'きく' },
    translate: 'to hear; to ask',
    type: uVerb,
  },
  {
    dictionary: { kanji: 'する', hiragana: 'する' },
    translate: 'to do',
    type: suruVerb,
  },
  {
    dictionary: { kanji: '来る', hiragana: 'くる' },
    translate: 'to go',
    type: kuruVerb,
  },
];

export {
  CONST,
  conjForms,
  words,
};
