// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age
// и возвращает средний возраст.

const getAverageAge = (users) =>
  users.reduce((sum, user) => sum + user.age, 0) / users.length;
