// Напишите функцию checkSpam(str),
// возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

const checkSpam = (str) => {
  const spamWords = ['viagra', 'xxx'];
  const lowCaseStr = str.toLowerCase();

  for (let spamWord of spamWords) {
    if (lowCaseStr.includes(spamWord)) {
      return true;
    }
  }

  return false;
};
