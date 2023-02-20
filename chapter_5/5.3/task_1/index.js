// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
const ucFirst = (str) => {
  if (str.length === 0) return str;

  const firstCharToUpperCase = str[0].toUpperCase();

  return `${firstCharToUpperCase}${str.slice(1)}`;
};
