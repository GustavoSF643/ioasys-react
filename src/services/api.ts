import axios, { AxiosRequestConfig } from "axios";
import Auth from "./auth";

const tokenKey = "@ioasys:token";
const refreshKey = "@ioasys:refresh";
const auth = new Auth(tokenKey, refreshKey);

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = auth.getToken();

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`
    };
  }

  return config;
});

const refreshToken = () => {
  return new Promise((resolve, reject) => {
    try {
      const refreshToken = auth.getRefreshToken();
      const axiosConfig: AxiosRequestConfig = {
        url: "/auth/refresh-token",
        method: "POST",
        data: {
          refreshToken,
        }
      }
      api.request(axiosConfig)
        .then((res) => {
          const accessToken = res.headers["authorization"];
          const refreshToken = res.headers["refresh-token"];
          auth.login(accessToken, refreshToken);

          return resolve(res);
        })
        .catch((error) => {
          auth.logout();
          window.location.reload();
          return reject(error);
        });
    } catch (err) {
      return reject(err);
    }
  })
}

api.interceptors.response.use(
  response => {
    return response;
  },
  async (error) => {
    const token = auth.getToken();

    if (error.response.status === 401 && token) {
      const response = await refreshToken();
      window.location.reload();
      return response;
    }

    return Promise.reject(error);
  }
);

export default api;