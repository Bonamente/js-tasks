// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом)
// элементы массива.

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }

  return arr;
};
