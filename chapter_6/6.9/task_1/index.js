// Создайте декоратор spy(func), который должен возвращать обёртку,
// которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

const spy = (func) => {
  wrapper.calls = [];

  function wrapper(...args) {
    wrapper.calls.push(args);

    return func.apply(this, args);
  }

  return wrapper;
};
