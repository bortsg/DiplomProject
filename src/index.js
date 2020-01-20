import "./pages/index.css";
// import "./src/scripts/main.js";


const now = new Date();
const dayPrevious= 7;
const dayInMilliseconds = 24*60*60*1000;
const before = new Date(now.getTime() - (dayPrevious-1)*dayInMilliseconds); // already in milliseconds
const nowInApiFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
const beforeInApiFormat = `${before.getFullYear()}-${before.getMonth() + 1}-${before.getDate()}`;
const pageSize = 100;


function validateForm() {
  // После сабмита формы производится валидация. Если в поле не введён текст, выводится ошибка
  // «Нужно ввести ключевое слово»
}

function showResultsBlock() {
  // До получения данных блок содержит:
  // заголовок «Результаты»,
  // прелоудер.

  document.querySelector('.results__content').setAttribute('style', 'display:none');
  document.querySelector('.results__analytics').setAttribute('style', 'display:none');
  document.querySelector('.results__show-more').setAttribute('style', 'display:none');
  document.querySelector('.not-found').setAttribute('style', 'display:none');
}

function showNotFoundResults() {
  // если ничего не найдено (data.results.length == 0) - на месте прелоудера надпись «Ничего не найдено»
  document.querySelector('.preloader').setAttribute('style', 'display:none');
  document.querySelector('.not-found').setAttribute('style', 'display:flex');
}

function showCards() {
  // Когда данные получены, в блоке результатов исчезает прелоудер, и появляются карточки.
  // Их следует расположить в линию по 3 на каждой строке на разрешении 1280 пикселей.
  // Если сжимать окно браузера, карточки переносятся на следующую строку.
  document.querySelector('.preloader').setAttribute('style', 'display:none');


  // Если карточек больше трёх, отрисовываются только 3, а под ними появляется кнопка «Показать ещё».
  // По нажатию отрисовываются ещё три, а кнопка сдвигается ниже, чтобы оказаться внизу блока с карточками.
  // Когда все карточки отрисованы, кнопка «Показать ещё» должна пропасть.
}

function showErrorResults() {
  // в окне результатов выводится надпись «Во время запроса произошла ошибка. Возможно, проблема
  // с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».

}

document.querySelector('.search__field').addEventListener('submit', () => {
  event.preventDefault();

  // validateForm();

  const query = document.querySelector('.search__input').value;

  fetch(`${apiData.url}q=${query}&${apiData.urlParam}`)
    .then(function (res) {
      if (res.ok) {

        showResultsBlock();

        console.log('ok');
        return res.json();
      }
      return Promise.reject(`Код ошибки: ${res.status}`);
    })
    .then((data) => {
      console.log(data);
      console.log(data.totalResults);
      // настроить хранение localStorage

      if (data.totalResults===0) {
      // если ничего не найдено
        showNotFoundResults();
      }


      // showCards();
    })
    .catch((err) => {
      console.log(err);
      // showErrorResults();
    });
});

const apiKey = '0caee48c106d4eb5a5e92f2d5bb306e9';
const apiData = {
    url: 'https://newsapi.org/v2/everything?',
    urlParam: `language=ru&from=${nowInApiFormat}&to=${beforeInApiFormat}&pageSize=${pageSize}&apiKey=${apiKey}`
}







