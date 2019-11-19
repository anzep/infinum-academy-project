/* eslint-disable no-else-return */
import fetch from 'isomorphic-fetch';

class ApiService {
  _baseUrl = 'https://api.infinum.academy/api/';

  _makeRequest(url, method, body, headers) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } if (response.status === 401) {
        throw new Error('Authentication error');
      } else {
        throw response.errors;
      }
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
