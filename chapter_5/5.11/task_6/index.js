// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToday = () => {
  const date = new Date();

  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};
