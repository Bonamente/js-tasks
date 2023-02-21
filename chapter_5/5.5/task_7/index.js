// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((user) => user.name);
