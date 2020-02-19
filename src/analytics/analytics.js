import "./analytics.css";

console.log(localStorage.getItem('searchInput'));
const searchInput = localStorage.getItem('searchInput');

document.querySelector('.analytics__theme').textContent = searchInput[0].toUpperCase() + searchInput.slice(1);

let titleResults = 0;
let descriptionResults = 0;
for (let i=0; i< localStorage.length - 2 ; i++) {
  if ( JSON.parse(localStorage.getItem(i)).title.toLowerCase().includes(searchInput.toLowerCase())) {
    titleResults = titleResults+1;
  } else if(JSON.parse(localStorage.getItem(i)).description.toLowerCase().includes(searchInput.toLowerCase())) {
    descriptionResults ++;
  }
  // console.log(i);
  // console.log( JSON.parse(localStorage.getItem(i)).title )
}

console.log(titleResults);
console.log(descriptionResults);

const totalResults = titleResults+descriptionResults;
console.log(totalResults);

document.querySelector('.analytics__per-week_volume').textContent = localStorage.length - 2;
document.querySelector('.analytics__mentions_volume').textContent = titleResults;



const data = JSON.parse(localStorage.getItem(0)).publishedAt;
const dataInFormat = new Date(data.slice(0,10)); // отбрасываем время (часы-минуты) от даты
console.log(dataInFormat.getMonth()); //месяц (0 соотв январю!)
console.log(dataInFormat.getDay()); // день недели, 0 соотв. воскресенью

const daysList = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const monthList = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];

