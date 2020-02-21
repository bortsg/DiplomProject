export default class NewsCard {
  constructor() {
  }

  draw(k) {
    for (let i=0; i<3; i++) {
      // добавить функцию проверки наличия, и корректности картинки изображения новости
      // console.log(fetch(JSON.parse(localStorage.getItem(i+3*k)).urlToImage, {method: 'GET'}) );

      if (localStorage.getItem(i+3*k)) {
        const templ = document.getElementById('templ');
        const elem = templ.content.cloneNode(true);

        const data = JSON.parse(localStorage.getItem(i+3*k)).publishedAt;
        const parsedDate = Date.parse(data);
        const formatter = new Intl.DateTimeFormat("ru", {year: "numeric", month: "long", day: "numeric"});
        const formattedDate = formatter.format(new Date(parsedDate));
        const publishedDate = formattedDate.slice(0, formattedDate.length-8) + ", " + formattedDate.slice(-7,-3);

        const newsImage = elem.querySelector('.news-item__image');
        if (JSON.parse(localStorage.getItem(i+3*k)).urlToImage) {
          newsImage.setAttribute('src', JSON.parse(localStorage.getItem(i+3*k)).urlToImage);
        } else newsImage.setAttribute('src', 'https://www.funnycatpix.com/_pics/Sitting_With_My_Kids.jpg');

        const newsDate = elem.querySelector('.news-item__date');
        newsDate.textContent = publishedDate;

        const newsTitle = elem.querySelector('.news-item__title');
        newsTitle.textContent = JSON.parse(localStorage.getItem(i+3*k)).title;

        const newsDescription = elem.querySelector('.news-item__description');
        newsDescription.textContent = JSON.parse(localStorage.getItem(i+3*k)).description;

        const newsUrl = elem.querySelector('.news-item__source')
        newsUrl.textContent = JSON.parse(localStorage.getItem(i+3*k)).source.name;
        newsUrl.setAttribute('target', 'blank');
        newsUrl.setAttribute('href', JSON.parse(localStorage.getItem(i+3*k)).url);

        document.querySelector('.results__content').appendChild(elem);
      }
    }
  }

  checkForButton(k) {
    if (localStorage.getItem(2+3*k +3)) {
      document.querySelector('.results__show-more').setAttribute('style', 'display:inline');
    } else {
      document.querySelector('.results__show-more').setAttribute('style', 'display:none')
      document.querySelector('.news').style.marginBottom = '64px';
    };
  }

  create() {
    let k=0;
    this.draw(k);
    this.checkForButton(k);

    if ( k < Math.floor(localStorage.length / 3)) {
      document.querySelector('.results__show-more').addEventListener('click', () => {
        if ((k <  Math.floor(localStorage.length / 3)) && (localStorage.getItem(2+3*k))) {
          k = k+1;
          this.draw(k);
          this.checkForButton(k-1);
        }
      });
    }

    document.querySelector('.results').setAttribute('style', 'display:flex');
    document.querySelector('.results__content').setAttribute('style', 'display:grid');
    document.querySelector('.results__analytics').setAttribute('style', 'display:flex');
  }
}
