// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

const sumSalaries = (salaries) => {
  let sumOfSalaries = 0;

  for (let salary of Object.values(salaries)) {
    sumOfSalaries += salary;
  }

  return sumOfSalaries;
};
