// Напишите функцию randomInteger(min, max),
// которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
