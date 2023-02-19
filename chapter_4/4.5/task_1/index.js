// Возможно ли создать функции A и B, чтобы new A() == new B()?
// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// Решение:
let object = {};

function A() {
  return object;
}

function B() {
  return object;
}

console.log(new A() === new B()); //true
