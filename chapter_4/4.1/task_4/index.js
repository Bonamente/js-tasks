// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'number') {
      obj[key] = value * 2;
    }
  }
};
