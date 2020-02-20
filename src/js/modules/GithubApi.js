const gitHubUrl = 'https://api.github.com/repos/bortsgDiplomProject.github.io/commits';


export default class GitHubApi {
  constructor () {

  }

  getCommitStory () {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        console.log('git api ok');
        return res.json();        
      }
      return Promise.reject(res.status);
    })
  }
}

