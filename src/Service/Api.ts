import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = "http://localhost:3030/";

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

/**
 * This Interceptor will add the JWT Token to the Authorisation in the
 * Header of the request. This Bearer Token will only be added, when the
 * URL will not have the "login" or "register" Route. 
 */
defaultAxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    let correctPath: boolean =
      config.url !== "login" && config.url !== "register";
    if (localStorage.getItem("access_token") !== "" && correctPath) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
