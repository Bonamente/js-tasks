// Выведите односвязный список в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Решение с использованием цикла:
const printListInReverseOrder = (list) => {
  let current = list;
  let values = [];

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  for (let i = values.length - 1; i >= 0; i -= 1) {
    console.log(values[i]);
  }
};

// Решение с использованием рекурсии:
const printListInReverseOrder2 = (list) => {
  if (list.next) printListInReverseOrder2(list.next);

  console.log(list.value);
};
