import "./pages/index.css"
import NewsApi from './js/modules/NewsApi.js'
import NewsCardList from './js/components/NewsCardList'
import NewsCard from './js/components/NewsCard'
 


function validateForm() {
  // После сабмита формы производится валидация. Если в поле не введён текст, выводится ошибка
  // «Нужно ввести ключевое слово»
}

function showResultsBlock() {
  // До получения данных блок содержит:
  // заголовок «Результаты»,
  // прелоудер.
  document.querySelector('.results').setAttribute('style', 'display:flex');
  document.querySelector('.results__content').setAttribute('style', 'display:none');
  document.querySelector('.results__analytics').setAttribute('style', 'display:none');
  document.querySelector('.results__show-more').setAttribute('style', 'display:none');
}

function hideResultsBlock() {
  // убрать от показа блок с результатами
  document.querySelector('.results').setAttribute('style', 'display:none');
}

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

function showErrorResults() {
  // в окне результатов выводится надпись «Во время запроса произошла ошибка. Возможно, проблема
  // с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».
  document.querySelector('.results__error').setAttribute('style', 'display: block');
}

function hideErrorResults() {
  // в окне результатов выводится надпись «Во время запроса произошла ошибка. Возможно, проблема
  // с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз».
  document.querySelector('.results__error').setAttribute('style', 'display: none');
}

function hideResultsTitle() {
  document.querySelector('.results__header').setAttribute('style', 'display: none');
}

function disableSearchButton() {
  document.querySelector('.search__button').setAttribute('disabled', true);
}

function enableSearchButton() {
  document.querySelector('.search__button').removeAttribute('disabled');
}

// отрисуем карточки по уже спрошенной теме - searchInput, если попадаем на главную страницу повторно, после просмотра аналитики например
if (localStorage.getItem('searchInput')) {
  showResultsBlock();
  hidePreloader();
  hideNotFound();
  const newsCard = new NewsCard();  
  newsCard.create();
} else {
  hideResultsBlock();
  hidePreloader();
  hideNotFound();
}



document.querySelector('.search__field').addEventListener('submit', () => {
  event.preventDefault();
  disableSearchButton();
  
  hideErrorResults()
  showPreloader();
  showResultsBlock();
  localStorage.clear();

  // очистка уже отрисованных карточек по предыдушему запросу
  while (document.querySelector('.results__content').firstElementChild !== document.querySelector('.results__content').lastElementChild ) {
    document.querySelector('.results__content').lastElementChild.remove();
    localStorage.clear();
  }    

  // validateForm();

  const searchInput = document.querySelector('.search__input').value;
  localStorage.setItem('searchInput', searchInput); // сохраним тему поиска, чтобы выводить её в Аналитике

  const newsApi = new NewsApi();
  newsApi.getNews(searchInput)
    .then ( (data) => {
      if (!data.length){ 
        hidePreloader();        
        hideResultsBlock();
        showNotFound();
        localStorage.clear();
        enableSearchButton();
      } else {     
      hidePreloader();
      hideNotFound();
      enableSearchButton();

      const newsCardList = new NewsCardList();
      newsCardList.render();
      }
    })
    .catch( (err) => {
      hideResultsTitle();
      showErrorResults();
      hidePreloader();
      localStorage.clear();
      enableSearchButton();

      return Promise.reject(`Код ошибки: ${err}`);
    })    
});








