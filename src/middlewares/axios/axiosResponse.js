import { clearSession } from "../../utils/storage/session";

export const axiosResponseInterseptors = (response) => {
  return response;
};

export const axiosResponseError = (error) => {
  if (error.response.status === 401) {
    clearSession();
  }
  return Promise.reject(error);
};
