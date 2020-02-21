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
        return res.json();
      }
      return Promise.reject(res.status);
    })
  }


  drawCommit(data) {

    const monthsCommits = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

    for (let i=0; i< 20; i++) {
      const glideSlide = document.createElement('li');
      glideSlide.classList.add('glide__slide', 'phrase-block');

      const commitDate = document.createElement('h4');
      commitDate.classList.add('phrase-block__date');
      const commitDateFormat = new Date (data[i].commit.committer.date);
      commitDate.textContent = commitDateFormat.getDate() + ' ' + monthsCommits[commitDateFormat.getMonth()] + ', ' + commitDateFormat.getFullYear();
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

      document.querySelector('.glide__slides').append(glideSlide);
    }

  }


}

