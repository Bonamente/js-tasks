let a = prompt('Первое число?', 1);
let b = prompt('Второе число?', 2);

alert(a + b); // 12

// Чтобы получить результат, равный 3, необходимо внести следующие изменения:
alert(Number(a) + Number(b)); // 3
