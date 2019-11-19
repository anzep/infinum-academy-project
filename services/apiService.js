import fetch from 'isomorphic-fetch';

class ApiService {
  _baseUrl = 'https://api.infinum.academy/api/';

  _makeRequest(url, method, body, headers) {
    console.log('make request triggered');
    return fetch(`${this._baseUrl}${url}`, {
      method,
      body,
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    }).then(function(res) {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      response.json();
    });
  }

  get(url, authKey) {
    return this._makeRequest(url, 'GET', authKey);
  }

  post(url, body, authKey) {
    console.log('post triggered');
    console.log(body);
    return this._makeRequest(url, 'POST', body);
  }
}

export default new ApiService();
