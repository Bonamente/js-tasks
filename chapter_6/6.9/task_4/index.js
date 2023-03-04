// Создайте «тормозящий» декоратор throttle(f, ms),
// который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд.
// Те вызовы, которые попадают в период «торможения», игнорируются.

const throttle = (f, ms) => {
  let isIdle = false;
  let savedThis;
  let savedArgs;

  return function wrapper() {
    if (isIdle) {
      savedThis = this;
      savedArgs = arguments;

      return;
    }

    f.apply(this, arguments);

    isIdle = true;

    setTimeout(() => {
      isIdle = false;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, ms);
  };
};
