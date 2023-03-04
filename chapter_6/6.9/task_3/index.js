// Результатом декоратора debounce(f, ms) должна быть обёртка,
// которая передаёт вызов f не более одного раза в ms миллисекунд.
// Другими словами, когда мы вызываем debounce, это гарантирует,
// что все остальные вызовы будут игнорироваться в течение ms.

const debounce = (f, ms) => {
  let isIdle = false;

  return function () {
    if (isIdle) return;

    f.apply(this, arguments);

    isIdle = true;

    setTimeout(() => (isIdle = false), ms);
  };
};
