export default class GitHubApi {
  constructor () {
    this.gitHubUrl = 'https://api.github.com/repos/bortsg/DiplomProject.github.io/commits';
  }

  getCommitStory () {
    return fetch(`${this.gitHubUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        // console.log('hi');
        // this.drawCommit(res);
        return res.json();
      }
      return Promise.reject(res.status);
    })
  }


  drawCommit(data) {

    console.log('draw');

    const monthCommit = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

    for (let i=0; i< 20; i++) {
      const glideSlide = document.createElement('li');
      glideSlide.classList.add('glide__slide', 'phrase-block');

      const commitDate = document.createElement('h4');
      commitDate.classList.add('phrase-block__date');
      const commitDateFormat = new Date (data[i].commit.committer.date);
      // console.log(commitDateFormat.getDate() + ' ' + monthCommit[commitDateFormat.getMonth()] + ',' + commitDateFormat.getFullYear());
      commitDate.textContent = commitDateFormat.getDate() + ' ' + monthCommit[commitDateFormat.getMonth()] + ', ' + commitDateFormat.getFullYear();
      glideSlide.appendChild(commitDate);

      const commitPerson = document.createElement('div');
      commitPerson.classList.add('phrase-block__person');
      glideSlide.appendChild(commitPerson);

      const commiterPhoto = document.createElement('img');
      commiterPhoto.classList.add('phrase-block__photo');
      commiterPhoto.setAttribute('src', data[i].author.avatar_url);
      commiterPhoto.setAttribute('alt', "quote ava");
      commitPerson.appendChild(commiterPhoto);

      const commiterName = document.createElement('p');
      commiterName.classList.add('phrase-block__name');
      commiterName.textContent = data[i].commit.committer.name;
      commitPerson.appendChild(commiterName);

      const commiterMail= document.createElement('p');
      commiterMail.classList.add('phrase-block__mail');
      commiterMail.textContent = data[i].commit.committer.email;
      commitPerson.appendChild(commiterMail);

      const commitText = document.createElement('p');
      commitText.classList.add('phrase-block__text');
      commitText.textContent = data[i].commit.message;
      glideSlide.appendChild(commitText);

      // document.querySelector('.glide__slides').setAttribute('style', 'transition: transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s');
      // document.querySelector('.glide__slides').setAttribute('style', 'transform: translate3d(-391.364px, 0px, 0px)');

      document.querySelector('.glide__slides').append(glideSlide);
    }

    // for (let i=0; i< 2; i++) {
    //   // let glideSlide = document.querySelectorAll('.glide__slide');

    //   let commitDate = document.querySelector('.phrase-block__date');
    //   commitDate.textContent = data[1].commit.committer.date;

    //   let commiterMail = document.querySelector('.phrase-block__mail');
    //   commiterMail.textContent = data[1].commit.committer.email;

    //   let commiterPhoto = document.querySelector('.phrase-block__photo');
    //   commiterPhoto.setAttribute('src', data[1].author.avatar_url);

    //   let commitText = document.querySelector('.phrase-block__text');
    //   commitText.textContent = data[1].commit.message;
    // }

    // console.log(data[1]);
    // const templCommit = document.getElementById('commit-templ');
    // const elemCommit = templCommit.content.cloneNode(true);

    // elemCommit.querySelector('.glide__slide').classList.add('glide__slide--clone');
    // let commiterName = elemCommit.querySelector('.phrase-block__name');
    // commiterName.textContent = data[1].commit.committer.name;

    // let commitDate = elemCommit.querySelector('.phrase-block__date');
    // commitDate.textContent = data[1].commit.committer.date;

    // let commiterMail = elemCommit.querySelector('.phrase-block__mail');
    // commiterMail.textContent = data[1].commit.committer.email;

    // let commiterPhoto = elemCommit.querySelector('.phrase-block__photo');
    // commiterPhoto.setAttribute('src', data[1].author.avatar_url);

    // let commiterText = elemCommit.querySelector('.phrase-block__text');
    // commiterText.textContent = data[1].commit.message;

    // // document.querySelector('.glide__slides').removeChild(templCommit);
    // // document.querySelector('.glide__slides').removeChild(templCommit);
    // // document.querySelector('.glide__slides').removeChild(templCommit);

    // document.querySelector('.glide__slides').prepend(elemCommit);
    // document.querySelector('.glide__slides').prepend(elemCommit);
    // document.querySelector('.glide__slides').prepend(elemCommit);
    // document.querySelector('.glide__slides').prepend(elemCommit);

    // document.querySelector('.glide__slide').style.width = '340px';

    // let dataObj = data[1];
    // console.log(data[1].author.avatar_url);
    // console.log(data[1].commit.committer.name);
    // console.log(data[1].commit.committer.email);
    // console.log(data[1].commit.message);

  }


}

