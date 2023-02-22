// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hrs = date.getHours();
  const mins = date.getMinutes();

  const formattedYear = year.toString().slice(-2);
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedHrs = hrs < 10 ? `0${hrs}` : hrs;
  const formattedMins = mins < 10 ? `0${mins}` : mins;

  const diffInSecs = Math.round((new Date() - date) / 1000);
  const diffInMins = diffInSecs / 60;
  const diffInHrs = diffInMins / 60;

  switch (true) {
    case diffInSecs < 1:
      return 'прямо сейчас';
    case diffInMins < 1:
      return `${diffInSecs} сек. назад`;
    case diffInHrs < 1:
      return `${diffInMins} мин. назад`;
    default:
      return `${formattedDay}.${formattedMonth}.${formattedYear} ${formattedHrs}:${formattedMins}`;
  }
};
