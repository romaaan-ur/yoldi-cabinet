import { InternalAxiosRequestConfig } from "axios";

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface IApiKey {
  value: string;
}

export interface ISetAuth extends InternalAxiosRequestConfig {
  "X-API-KEY": string;
}

export interface IProfile {
  name: string;
  email: string;
  slug: string;
  description: null | string;
  image: null | IImage;
  cover: null | IImage;
}

export interface IImage {
  id: string;
  url: string;
  width: string;
  height: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IApiError {
  message: string;
}
