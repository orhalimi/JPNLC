

const getRandomArrayItem = arr => (arr[Math.floor(Math.random() * arr.length)]);

const objMap = (obj, func) => Object.assign(...Object.keys(obj).map(k => ({ [k]: func(obj[k]) })));

export { getRandomArrayItem, objMap };

