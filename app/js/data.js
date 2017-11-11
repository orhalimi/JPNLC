
const CONST = {
  conjBase: 'base',
  conjTrans: 'transaction',
  conjBoth: 'both',
  wordTypes: {
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
  hiragana: {
    a: ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ', 'が', 'ざ', 'だ', 'ば', 'ぱ'],
    i: ['い', 'き', 'し', 'ち', 'に', 'ひ', 'み', ' ', 'り', ' ', 'ぎ', 'じ', 'ぢ', 'び', 'ぴ'],
    u: ['う', 'く', 'す', 'つ', 'ぬ', 'ふ', 'む', 'ゆ', 'る', ' ', 'ぐ', 'ず', 'づ', 'ぶ', 'ぷ'],
    e: ['え', 'け', 'せ', 'て', 'ね', 'へ', 'め', ' ', 'れ', ' ', 'げ', 'ぜ', 'で', 'べ', 'ぺ'],
    o: ['お', 'こ', 'そ', 'と', 'の', 'ほ', 'も', 'よ', 'ろ', 'を', 'ご', 'ぞ', 'ど', 'ぼ', 'ぽ'],
  },
};
const {
  ruVerb, uVerb, suruVerb, kuruVerb,
} = CONST.wordTypes;
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
    missing: [conjuctionType.te],
    exeptions: { masu: { kanji: '食べまます', hiragana: 'たべまます' } },
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
  words,
};
