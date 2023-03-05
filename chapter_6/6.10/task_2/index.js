// Что нужно передать в вызов функции askPassword в коде ниже,
// чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// Ваши изменения должны затрагивать только выделенный (закомментированный) фрагмент кода.

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

// askPassword(?, ?); // ?

askPassword(
  () => user.login(true),
  () => user.login(false)
);
