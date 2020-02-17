import "./pages/index.css"
import NewsApi from './js/modules/NewsApi.js'
import NewsCardList from './js/components/NewsCardList'




function validateForm() {
  // После сабмита формы производится валидация. Если в поле не введён текст, выводится ошибка
  // «Нужно ввести ключевое слово»

  //ЧТО ПРОИСХОДИТ ЕСЛИ ВВОДИТЬ ЦИФРЫ В ПОЛЕ ПОИСКА?!
}

function showResultsBlock() {
  // До получения данных блок содержит:
  // заголовок «Результаты»,
  // прелоудер.

  document.querySelector('.results').setAttribute('style', 'display:flex');
  document.querySelector('.results__content').setAttribute('style', 'display:none');
  document.querySelector('.results__analytics').setAttribute('style', 'display:none');
  document.querySelector('.results__show-more').setAttribute('style', 'display:none');
  document.querySelector('.not-found').setAttribute('style', 'display:none');
}

function hideResultsBlock() {
  // убрать от показа блок с результатами
  document.querySelector('.results').setAttribute('style', 'display:none');
}

// проверить какой display: надо выставлять!!!!
function showPreloader() {
  document.querySelector('.preloader').setAttribute('style', 'display:inline');
}

function hidePreloader() {
  document.querySelector('.preloader').setAttribute('style', 'display:none');
}

function showNotFound() {
  // если ничего не найдено (data.results.length == 0) - на месте прелоудера надпись «Ничего не найдено»

  document.querySelector('.not-found').setAttribute('style', 'display:flex');
}

function hideNotFound() {
  document.querySelector('.not-found').setAttribute('style', 'display:none');
}


function createCard(data) {
  console.log(data.articles[1]);

  // constructor () {
  // this.title=
  // this.date=
  // this.subtitle=
  // this.image=
  // }

  console.log(data.articles[1].title);

  console.log(data.articles[1].source.name);

  console.log(data.articles[1].publishedAt);

  console.log(data.articles[1].description);

  console.log(data.articles[1].urlToImage);

  console.log(data.articles[1].url);

  const date = data.articles[1].publishedAt;
  const parsedDate = Date.parse(date);

  const formatter = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // console.log( formatter.format(new Date(parsedDate)) );
  const formattedDate = formatter.format(new Date(parsedDate));

  console.log(formattedDate.slice(0, formattedDate.length-8) + ", " + formattedDate.slice(-7,-3));
  //отрезаем от года символ "г.", добавляем между ними запятую, и приписываем год (только цифры)

  const card = document.createElement('article');
  card.classList.add('news-item');

  const newsImage = document.createElement('img');
  newsImage.classList.add('news-item__image');

  const newsDate = document.createElement('div');
  newsDate.classList.add('news-item__date');

  const newsTitle = document.createElement('h3');
  newsTitle.classList.add('news-item__title');

  const newsDescription = document.createElement('p');
  newsDescription.classList.add('news-item__description');

  const newsUrl = document.createElement('a');
  newsUrl.classList.add('news-item__source');
}

function showCards() {
  // Когда данные получены, в блоке результатов исчезает прелоудер, и появляются карточки.
  document.querySelector('.preloader').setAttribute('style', 'display:none');

  // Их следует расположить в линию по 3 на каждой строке на разрешении 1280 пикселей.


  // Если сжимать окно браузера, карточки переносятся на следующую строку.



  // Если карточек больше трёх, отрисовываются только 3, а под ними появляется кнопка «Показать ещё».
  // По нажатию отрисовываются ещё три, а кнопка сдвигается ниже, чтобы оказаться внизу блока с карточками.
  // Когда все карточки отрисованы, кнопка «Показать ещё» должна пропасть.
}

function showErrorResults() {
  // в окне результатов выводится надпись «Во время запроса произошла ошибка. Возможно, проблема
  // с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».

}



hideResultsBlock();
hidePreloader();
hideNotFound();

document.querySelector('.search__field').addEventListener('submit', () => {
  event.preventDefault();

  showPreloader();
  showResultsBlock();

  localStorage.clear();

  // validateForm();

  const searchInput = document.querySelector('.search__input').value;
  const newsApi = new NewsApi();
  newsApi.getNews(searchInput)
    .then ( (data) => {
      // let keys = Object.keys(localStorage);
      // for(let key of keys.sort()) {
      //   console.log(`${key}: ${localStorage.getItem(key)}`);
      // }

      hidePreloader();

      console.log(data);
      const newsCardList = new NewsCardList();
      newsCardList.render();
    });



  // const listOfNews = newsApi.getNews(searchInput);

  // срабатывает асинхронность запроса - fetch из вызванной getnews не успевает вернуть результат,
  // когда уже вызывается этот кусок кода, поэтому выводится пустое значение при первом вызове
  // а также значение с предыдущего вызова при всех последующих

  // let keys = Object.keys(localStorage);
  // for(let key of keys.sort()) {
  //   console.log(`${key}: ${localStorage.getItem(key)}`);
  // }

  // if (localStorage.length) {
  //   console.log('пора сделать карточки');
  // }

});








