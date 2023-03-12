// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// Важные детали:
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет,
// то функция должна возвращать null в массиве результатов.

const getUsers = async (names) => {
  const baseUrl = 'https://api.github.com/users/';

  const promises = names.map((name) =>
    fetch(`${baseUrl}${name}`)
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null)
  );

  return await Promise.all(promises);
};
