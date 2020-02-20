class GitHubApi {
  constructor () {
  }

  getHistory () {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        authorization: `${this._token}`,
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
}

