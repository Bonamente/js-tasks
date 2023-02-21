// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

const camelize = (str) =>
  str
    .split('-')
    .map((el, i) => (i === 0 ? el : `${el[0].toUpperCase()}${el.slice(1)}`))
    .join('');
