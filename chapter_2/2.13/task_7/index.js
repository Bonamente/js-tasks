// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

function outputPrimesTo(num = 10) {
  for (let i = 2; i < num; i += 1) {
    if (isPrime(i)) console.log(i);
  }
}

function isPrime(num) {
  if (num < 2 || (num > 2 && num % 2 === 0)) return false;

  const maxDivisor = Math.sqrt(num);

  for (let divider = 3; divider <= maxDivisor; divider += 2) {
    if (num % divider === 0) return false;
  }

  return true;
}
