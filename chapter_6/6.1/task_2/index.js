// Написать функцию factorial(n), которая возвращает n!, используя рекурсию.
const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1));
