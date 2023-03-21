// Создайте функцию-генератор pseudoRandom(seed),
// которая получает seed и создаёт генератор с формулой:
// next = previous * 16807 % 2147483647

// Пример использования:
// let generator = pseudoRandom(1);

// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073

// Решение:
function* pseudoRandom(seed) {
  let val = seed;

  while (true) {
    val = (val * 16807) % 2147483647;
    yield val;
  }
}
