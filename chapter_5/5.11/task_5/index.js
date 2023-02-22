// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1, 0);

  return date.getDate();
};
