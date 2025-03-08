import axios from "axios";
import { axiosRequestError, axiosRequestInterseptors } from "./axiosRequest";
import { axiosResponseError, axiosResponseInterseptors } from "./axiosResponse";

const axiosIns = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {
    "x-custom-token": "",
  },
});

axiosIns.interceptors.request.use(
  (config) => axiosRequestInterseptors(config),
  (error) => axiosRequestError(error)
);

axiosIns.interceptors.response.use(
  (response) => axiosResponseInterseptors(response),
  (error) => axiosResponseError(error)
);

export default axiosIns;
