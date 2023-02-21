// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id
// в качестве ключа и элементами массива в качестве значений.

const groupById = (users) =>
  users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
