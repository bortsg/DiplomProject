import "./analytics.css";

// console.log(localStorage.getItem('searchInput'));
const searchInput = localStorage.getItem('searchInput');

document.querySelector('.analytics__theme').textContent = '«' + searchInput[0].toUpperCase() + searchInput.slice(1) + '»';

let titleResults = 0;
let descriptionResults = 0;
for (let i=0; i< localStorage.length - 2 ; i++) {
  if ( JSON.parse(localStorage.getItem(i)).title.toLowerCase().includes(searchInput.toLowerCase())) {
    titleResults = titleResults+1;
  } else if(JSON.parse(localStorage.getItem(i)).description.toLowerCase().includes(searchInput.toLowerCase())) {
    descriptionResults ++;
  }
}

const totalResults = titleResults+descriptionResults;
// console.log(totalResults);

document.querySelector('.analytics__per-week_volume').textContent = localStorage.length - 2;
document.querySelector('.analytics__mentions_volume').textContent = titleResults;


// подготовим названия колонок в гистограмме

const data = JSON.parse(localStorage.getItem(0)).publishedAt;
// console.log(data);
const dataInFormat = new Date(data.slice(0,10)); // отбрасываем время (часы-минуты) от даты

// console.log(dataInFormat.getMonth()); //месяц (0 соотв январю)
// console.log(dataInFormat.getDay()); // день недели, 0 соотв. воскресенью
// console.log(dataInFormat.getDate()); // число месяца, от 1 до 31

const daysList = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
const monthList = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];


// проверяем месяц на текущий момент и 7 дней ранее
const now = new Date(); //отсчёт новостей от текущей даты
const dayPrevious = 21; // за последние 7 дней
const dayInMilliseconds = 24*60*60*1000;
const before = new Date(now.getTime() - (dayPrevious-1)*dayInMilliseconds); // already in milliseconds
const monthNow = now.getMonth();
const monthBefore =  before.getMonth();

let monthColumnName = 0;
if (monthNow  === monthBefore) {
  monthColumnName = monthList[monthNow];
} else {
  monthColumnName = monthList[monthBefore] + '-' + monthList[monthNow];
}
// console.log(monthColumnName);

document.querySelector('.diagram__column-name').textContent = 'ДАТА (' + monthColumnName + ')';


// запись дня недели в колонке гистограммы

// const dateBefore = before.getDate() + ', ' + daysList[before.getDay()];
const obj   = Array.from(document.querySelectorAll('.diagram__date'));
for (let i = 0; i< 7; i++) {
  const day = new Date(before.getTime() + i*dayInMilliseconds) ; // день месяца надо вычислять заново, т.к. можно перевалить за месяц
  obj[i].textContent = day.getDate() + ', ' + daysList[(before.getDay() + i) % 7]; /// массив дней от 0 до 6, надо брать по модулю 7
  console.log(obj[i].textContent);
}

// подсчёт длины горизонтальной полосы диаграммы
