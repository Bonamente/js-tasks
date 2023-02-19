// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value.
// Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += Number(prompt('Введите число', 0));
  };
}
