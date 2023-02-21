// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age
// и сортирует их по нему.

const sortByAge = (users) => {
  const comparator = (user1, user2) => user1.age - user2.age;
  users.sort(comparator);
};
