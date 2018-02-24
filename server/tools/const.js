const CONST = {
  conjBase: 'base',
  conjTrans: 'transaction',
  conjBoth: 'both',
  DB: 'JPNLC',
  DBPath: 'mongodb://localhost',
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
  jwtExpTime: 24 * 60 * 3,
  secret: {
    jwt: 'neveroknot',
  },
};

export default CONST;
