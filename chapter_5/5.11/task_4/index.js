// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях.
// Функция не должна изменять переданный ей объект date.

const getDateAgo = (date, days) => {
  const copy = new Date(date);
  copy.setDate(date.getDate() - days);

  return copy.getDate();
};
