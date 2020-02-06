
const now = new Date(); //отсчёт новостей от текущей даты
const dayPrevious= 7; // за последние 7 дней
const dayInMilliseconds = 24*60*60*1000;
const before = new Date(now.getTime() - (dayPrevious-1)*dayInMilliseconds); // already in milliseconds
const nowInApiFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
const beforeInApiFormat = `${before.getFullYear()}-${before.getMonth() + 1}-${before.getDate()}`;
const pageSize = 100; // смотрим максимум 100 последних новостей за указанный период

const apiKey = '0caee48c106d4eb5a5e92f2d5bb306e9';
const apiData = {
  url: 'https://newsapi.org/v2/everything?',
  urlParam: `language=ru&from=${nowInApiFormat}&to=${beforeInApiFormat}&pageSize=${pageSize}&apiKey=${apiKey}`
}

// const query = document.querySelector('.search__input').value;

class NewsApi {
  constructor() {
  }

  getNews(searchInput){
    // this.searchInput = this.searchInput;
    // const searchInput = document.querySelector('.search__input').value;


    return fetch(`${apiData.url}q=${searchInput}&${apiData.urlParam}`, {
      method: 'GET'
    })
    .then(function (res) {
      if (res.ok) {
        // showResultsBlock();
        // console.log('ok');
        return res.json();
      }
      return Promise.reject(`Код ошибки: ${res.status}`);
    })
    .then((data) => {
      // console.log(data);
      // настроить хранение localStorage

      if (data.totalResults===0) {
      // если ничего не найдено
      // showNotFoundResults();
      }
      console.log(data);
      console.log(data.articles);
      for (let i=0; i< data.articles.length; i++) {
        localStorage.setItem([i],  data.articles[i] );
      }

      // return data.status;
      // createCard(data);
      // showCards();
    })
    .catch((err) => {
      console.log(err);
      // showErrorResults();
    });

    // return response.articles;
  }
}

export default NewsApi






