import { apiClient, setAuthHeader } from "./apiClient";

import { IApiKey } from "@/types";
import { AxiosResponse } from "axios";

const getRequest = <Response>(key: string) =>
  apiClient.get<Response>(key).then(({ data }) => data);

const postRequest = <Response>(key: string, { arg }: Record<string, any>) =>
  apiClient.post<Response>(key, { ...arg }).then(({ data }) => data);

const patchRequest = <Response>(key: string, { arg }: Record<string, any>) =>
  apiClient.patch<Response>(key, { ...arg }).then(({ data }) => data);

const authRequest = async (key: string, { arg }: Record<string, any>) => {
  try {
    const { data } = await apiClient.post<IApiKey>(key, { ...arg });
    if (data.value) {
      setAuthHeader(data.value);
    }
    return data;
  } catch (error: any) {
    throw error?.response?.data?.message || "Ошибка, попробуйте снова";
  }
};

export { getRequest, postRequest, patchRequest, authRequest };
