import NewsCard from './NewsCard'

export default class NewsCardList {
  constructor(data) {
    // this.data = data;
    // this.render = this.render.bind(this);

    const cardList = document.createElement('div');
    cardList.classList.add('results__content, news');

  }

  render() {
    console.log(localStorage.length);
    if (localStorage.length === 0) {
      // блок ничего не найдено
    }
    else if (localStorage.length >= 3) {
      newsCard = new NewsCard();
      newsCard.create();
    }

    else {
      // кнопка показать ещё
    }
  }


}
