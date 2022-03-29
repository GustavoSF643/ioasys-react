export default class Auth {
  tokenKey: string;

  constructor(token_key: string) {
    this.tokenKey = token_key;
  }

  isAuthenticated() {
    return localStorage.getItem(this.tokenKey);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  login(token: string) {
    return localStorage.setItem(this.tokenKey, token);
  }

  logout() {
    return localStorage.removeItem(this.tokenKey);
  }
}