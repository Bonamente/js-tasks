// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToTomorrow = () => {
  const today = new Date();
  const secondsInDay = 86400;
  const secondsNow =
    today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();

  return secondsInDay - secondsNow;
};
