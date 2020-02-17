export default class NewsCard {
  constructor() {
    // this.img = newsItem.urlToImage;
    // console.log(img);
  }

  create() {
    // const templ = document.getElementsByClassName("results__content news");
    const templ = document.getElementById('templ');
    const elem = templ.content.cloneNode(true);
    
    console.log(elem);

    elem.querySelectorAll('news-item__date').textContent = '123123123123 TEST';

    const card = document.createElement('article');
    card.classList.add('news-item');
    elem.appendChild(card);

    const newsImage = document.createElement('img');
    newsImage.classList.add('news-item__image');
    card.appendChild(newsImage);

    const newsDate = document.createElement('div');
    newsDate.classList.add('news-item__date');
    card.appendChild(newsDate);

    const newsTitle = document.createElement('h3');
    newsTitle.classList.add('news-item__title');
    card.appendChild(newsTitle);

    const newsDescription = document.createElement('p');
    newsDescription.classList.add('news-item__description');
    card.appendChild(newsDescription);

    const newsUrl = document.createElement('a');
    newsUrl.classList.add('news-item__source');
    card.appendChild(newsUrl);
    

    document.querySelector('.results').setAttribute('style', 'display:flex');
    document.querySelector('.results__content').setAttribute('style', 'display:flex');
    document.querySelector('.results__analytics').setAttribute('style', 'display:flex');
    document.querySelector('.results__show-more').setAttribute('style', 'display:flex');
    
    
    
    
    

  }
}
