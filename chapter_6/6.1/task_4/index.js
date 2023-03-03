// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
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
const printListI = (list) => {
  let current = list;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

// Решение с использованием рекурсии:
const printList = (list) => {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
};
