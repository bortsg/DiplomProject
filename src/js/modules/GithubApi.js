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
    .then(data => {
      this.drawCommit(data);
    })
    .catch(err => {
      alert(`${err}: ${err.status}`);
      console.log(`${err}: ${res.status}`);
    })
  }

  drawCommit(data) {
    // console.log(data[1]);
    const templCommit = document.getElementById('commit-templ');
    const elemCommit = templCommit.content.cloneNode(true);

    let commiterName = elemCommit.querySelector('.phrase-block__name');
    commiterName.textContent = data[1].commit.committer.name;

    let commiterMail = elemCommit.querySelector('.phrase-block__mail');
    commiterMail.textContent = data[1].commit.committer.email;

    let commiterPhoto = elemCommit.querySelector('.phrase-block__photo');
    commiterPhoto.setAttribute('src', data[1].author.avatar_url);

    // document.querySelector('.glide__slides').appendChild(elemCommit);

    // let dataObj = data[1];
    // console.log(data[1].author.avatar_url);
    // console.log(data[1].commit.committer.name);
    // console.log(data[1].commit.committer.email);
    // console.log(data[1].commit.message);

    // data[0];

  }


}

