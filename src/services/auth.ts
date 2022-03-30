export default class Auth {
  tokenKey: string;
  refreshTokenKey: string;

  constructor(tokenKey: string, refreshTokenKey = "") {
    this.tokenKey = tokenKey;
    this.refreshTokenKey = refreshTokenKey;
  }

  isAuthenticated() {
    return localStorage.getItem(this.tokenKey);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  getRefreshToken() {
    return localStorage.getItem(this.refreshTokenKey);
  }

  login(token: string, refreshToken = "") {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }
}
