
const now = new Date();
const dayPrevious= 7;
const dayInMilliseconds = 24*60*60*1000;
const before = new Date(now.getTime() - (dayPrevious-1)*dayInMilliseconds); // already in milliseconds
const nowInApiFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
const beforeInApiFormat = `${before.getFullYear()}-${before.getMonth() + 1}-${before.getDate()}`;
const pageSize = 100;


class NewsApi {
    constructor(url, token, settings) {
      this.url = url;
      this.token = token;
      this.settings = settings;
    }
  
    // getUser(){
    //   return fetch(`${this.baseUrl}/users/me`, {
    //     headers: {
    //       authorization: this.token
    //     }
    //   })
  
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();        
    //     } 
    //     return Promise.reject(`Ошибка: ${res.status}`);
    //   })
      
    //   .catch((err) => {
    //     console.log('Ошибка. Запрос не выполнен. Код ошибки:', err);      
    //   });
    // }
  
    // getInitialCards() {
    //   return fetch(`${this.baseUrl}/cards`, {
    //     headers: {
    //       authorization: this.token
    //     }
    //   })
   
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();        
    //     }      
    //     return Promise.reject(`Ошибка: ${res.status}`);
    //   })
  
    //   .catch((err) => {
    //     console.log('Ошибка. Запрос не выполнен. Код ошибки:', err);
    //   });
    // }
  
    // editUserOnServer(){
    //   return fetch(`${this.baseUrl}/users/me`, {
    //     method: 'PATCH',
    //     headers: {
    //       authorization:  this.token,
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //     name: document.forms.userInfoEdit.userName.value,
    //     about: document.forms.userInfoEdit.userJob.value
    //     }) // Можно улучшить
    //     // вместо селекторов лучше передавать параметры в метод
    //     // это позволит не привязывать классы к конкретной разметке
    //   })
  
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();        
    //     }
    //     return Promise.reject(`Ошибка: ${res.status}`);
    //   })
      
    //   .catch((err) => {
    //     console.log('Ошибка. Запрос не выполнен. Код ошибки:', err);      
    //   });
    // }  
  }
    

  const newsApi = new NewsApi({
    apiKey = '0caee48c106d4eb5a5e92f2d5bb306e9',
    apiData = {
      url: 'https://newsapi.org/v2/everything?',
      urlParam: `language=ru&from=${nowInApiFormat}&to=${beforeInApiFormat}&pageSize=${pageSize}&apiKey=${apiKey}`
    }

    // baseUrl: 'http://95.216.175.5/cohort3',
    // headers: {
    //   authorization: 'c79ba222-ea08-4c5f-913f-ef9b73e1970f',
    //   'Content-Type': 'application/json'
    // }
  });
  
  
  api.getUser().then(data => { // Можно улучшить ({ name, about })
    if (data.name && data.about)  {
      document.querySelector('.user-info__name').textContent = data.name;
      document.querySelector('.user-info__job').textContent = data.about;
      document.querySelector('.user-info__photo').style.backgroundImage = `url(${data.avatar})`;
    }
  });
  
  
  api.getInitialCards().then(cards => {
    /**
     * Можно улучшить
     * 
     * Чтобы избежать ошибок при пустом массиве стоит проверять количество
     * элементов в массиве cards && cards.length > 0
     */
    new CardList(document.querySelector('.places-list'), cards, buttonAddCard);
  });