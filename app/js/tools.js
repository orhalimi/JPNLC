import { CONST } from 'app/data';

const getRandomArrayItem = arr => (arr[Math.floor(Math.random() * arr.length)]);

const conjugateWord = (word, form) => {
  const { wordType, conjuctionType } = CONST;
  switch (form) {
    case conjuctionType.masu:
      return 1;
    default:
      throw new Error('Error: form wasn\'t found');
  }
};

export { getRandomArrayItem, conjugateWord };

