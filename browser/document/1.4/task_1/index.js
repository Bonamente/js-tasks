// Вот документ с таблицей и формой: https://learn.javascript.ru/task/find-elements/table.html

// Как найти?
// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

// Решение:
const table = document.getElementById('age-table');
const labels = table.getElementsByTagName('label');
const firstTdElement = table.querySelector('td');
const searchForm = document.querySelector('form[name="search"]');
const firstInputOfSearchForm = searchForm.querySelector('input');
const searchFormInputs = searchForm.querySelectorAll('input');
const lastOfSearchFormInputs = searchFormInputs[searchFormInputs.length - 1];
