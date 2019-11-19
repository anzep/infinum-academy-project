import fetch from 'isomorphic-fetch';

class ApiService {
  _baseUrl = 'https://api.infinum.academy/api/';

  _makeRequest(url, method, body, headers) {
    console.log('make request triggered');
    return fetch(`${this._baseUrl}${url}`, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    });
  }

  get(url) {
    console.log('get got called');
    return this._makeRequest(url, 'GET');
  }

  post(url, body) {
    return this._makeRequest(url, 'POST', body);
  }
}

export default new ApiService();
