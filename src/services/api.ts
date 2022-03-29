import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "./auth";

const tokenKey = process.env.TOKEN_KEY;
const refreshTokenKey = process.env.REFRESH_TOKEN_KEY;

if (!tokenKey) {
  throw new Error("TOKEN_KEY environment is required.")
}

const auth = new Auth(tokenKey, refreshTokenKey);

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = auth.getToken();

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
});

const refreshToken = (error: any) => {
  return new Promise((resolve, reject) => {
    try {
      const refreshToken = auth.getRefreshToken();
      const axiosConfig: AxiosRequestConfig = {
        url: "/auth/refresh_token",
        method: "POST",
        data: {
          refreshToken,
        }
      }
      api.request(axiosConfig)
        .then((res) => {
          const accessToken = res.headers["Authorization"];
          const refreshToken = res.headers["refresh-token"];
          auth.login(accessToken, refreshToken);

          return resolve(res);
        })
        .catch((err) => {
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
      const response = await refreshToken(error);
      return response;
    }

    if (error.response.status == 401) {
      const navigate = useNavigate();
      navigate("/sign-in");
    }

    return Promise.reject(error);
  }
);

export default api;