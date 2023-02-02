import { ISetAuth } from "@/types";
import axios, { InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    accept: "application/json",
  },
});

const setAuthHeader = (apiKey: string) =>
  apiClient.interceptors.request.use(
    (request: InternalAxiosRequestConfig<ISetAuth>) => {
      request.headers["X-API-KEY"] = apiKey;
      return request;
    }
  );

export { apiClient, setAuthHeader };
