// Вызов askPassword() в приведённом ниже коде должен проверить пароль
// и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке.
// Исправьте выделенную (закомментированную) строку, чтобы всё работало.

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// askPassword(user.loginOk, user.loginFail);

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
