// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

const aclean = (arr) => {
  const map = new Map();

  for (let word of arr) {
    const sortedStr = word.toLowerCase().split('').sort().join('');
    map.set(sortedStr, word);
  }

  return [...map.values()];
};
