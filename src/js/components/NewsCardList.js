import NewsCard from './NewsCard'

export default class NewsCardList {
  constructor() { 
  }

  render() {
    if(localStorage.length) {
      const newsCard = new NewsCard();
      newsCard.create();
    }   
  }


}
