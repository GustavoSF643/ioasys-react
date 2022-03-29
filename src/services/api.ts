import axios, { AxiosRequestConfig } from "axios";
import Auth from "./auth";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1"
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const tokenKey = process.env.TOKEN_KEY;

  if (tokenKey) {
    const auth = new Auth(tokenKey);
    const token = auth.getToken();

    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;