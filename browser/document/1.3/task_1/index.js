// Для страницы:
/* <html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html> */

// Напишите код, как получить:
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

// Решение:
const divElement = document.body.firstElementChild;
const ulElement = document.body.lastElementChild;
const secondLiElement = document.body.lastElementChild.lastElementChild;
