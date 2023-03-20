// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта,
// например hasOwnProperty.
// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться
// от обычного "class Rabbit"?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
class Rabbit extends Object {
  constructor(name) {
    super(); // исправляет ошибку
    this.name = name;
  }
}

let rabbit = new Rabbit('Кроль');
alert(rabbit.hasOwnProperty('name')); // Ошибка
