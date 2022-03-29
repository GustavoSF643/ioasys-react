export default class Auth {
  _token_key: string;

  constructor(token_key: string) {
    this._token_key = token_key;
  }

  isAuthenticated() {
    return localStorage.getItem(this._token_key);
  }

  getToken() {
    return localStorage.getItem(this._token_key);
  }

  login(token: string) {
    return localStorage.setItem(this._token_key, token);
  }

  logout() {
    return localStorage.removeItem(this._token_key);
  }
}