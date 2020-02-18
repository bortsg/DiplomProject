export default class NewsCard {
  constructor() {
    // this.img = newsItem.urlToImage;
    // console.log(img);
  }

  create() {
    const templ = document.getElementById('templ');
    const elem = templ.content.cloneNode(true);

    const card = document.createElement('article');
    card.classList.add('news-item');
    elem.appendChild(card);

    const newsImage = document.createElement('img');
    newsImage.classList.add('news-item__image');
    newsImage.setAttribute('src', JSON.parse(localStorage.getItem(0)).urlToImage);
    newsImage.setAttribute('alt', 'Новостная иллюстрация');
    card.appendChild(newsImage);

    const newsDate = document.createElement('div');
    newsDate.classList.add('news-item__date');
    newsDate.textContent = JSON.parse(localStorage.getItem(0)).publishedAt;
    card.appendChild(newsDate);

    const newsTitle = document.createElement('h3');
    newsTitle.classList.add('news-item__title');
    newsTitle.textContent = JSON.parse(localStorage.getItem(1)).title;
    card.appendChild(newsTitle);

    const newsDescription = document.createElement('p');
    newsDescription.classList.add('news-item__description');
    newsDescription.textContent = JSON.parse(localStorage.getItem(0)).description;
    card.appendChild(newsDescription);

    const newsUrl = document.createElement('a');
    newsUrl.classList.add('news-item__source');
    newsUrl.textContent = JSON.parse(localStorage.getItem(0)).author;
    newsUrl.setAttribute('href', JSON.parse(localStorage.getItem(0)).source.name);
    card.appendChild(newsUrl);
    
    console.log(elem);

    document.querySelector('.results').appendChild(elem);

    document.querySelector('.results').setAttribute('style', 'display:flex');
    document.querySelector('.results__content').setAttribute('style', 'display:flex');
    document.querySelector('.results__analytics').setAttribute('style', 'display:flex');
    document.querySelector('.results__show-more').setAttribute('style', 'display:inline');
    
    
    
    
    

  }
}
