export default class NewsCard {
  constructor() {
    // this.img = newsItem.urlToImage;
    // console.log(img);
  }

  create() {
    const templ = document.getElementById('templ');
    const elem = templ.content.cloneNode(true);

    // const card = document.createElement('article');
    // card.classList.add('news-item');
    // elem.appendChild(card);

    // const newsImage = document.createElement('img');
    const newsImage = elem.querySelector('.news-item__image');
    newsImage.setAttribute('src', JSON.parse(localStorage.getItem(0)).urlToImage);

    const newsDate = elem.querySelector('.news-item__date');
    newsDate.textContent = JSON.parse(localStorage.getItem(0)).publishedAt;

    const newsTitle = elem.querySelector('.news-item__title');
    newsTitle.textContent = JSON.parse(localStorage.getItem(1)).title;

    const newsDescription = elem.querySelector('.news-item__description');
    newsDescription.textContent = JSON.parse(localStorage.getItem(0)).description;

    const newsUrl = elem.querySelector('.news-item__source')
    newsUrl.textContent = JSON.parse(localStorage.getItem(0)).source.name;
    newsUrl.setAttribute('target', 'blank');
    newsUrl.setAttribute('href', JSON.parse(localStorage.getItem(0)).url);

    // console.log(elem);

    document.querySelector('.results__content').appendChild(elem);

    document.querySelector('.results').setAttribute('style', 'display:flex');
    document.querySelector('.results__content').setAttribute('style', 'display:grid');
    document.querySelector('.results__analytics').setAttribute('style', 'display:flex');
    document.querySelector('.results__show-more').setAttribute('style', 'display:inline');






  }
}
