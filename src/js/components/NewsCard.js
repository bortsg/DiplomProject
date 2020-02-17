export default class NewsCard {
  constructor() {

  }

  create() {
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

    card.append(newsImage);
    newsImage.append(newsDate);
    newsDate.append(newsTitile);
    newsTitile.append(newsDescription);
    newsDescription.append(newsUrl);
  }
}
