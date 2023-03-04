// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.

const delay = (f, ms) => {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
};
