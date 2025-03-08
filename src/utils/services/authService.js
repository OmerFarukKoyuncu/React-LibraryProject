import axiosIns from "../../middlewares/axios/axios";

export const userLogin = async (userName, password) =>
  await axiosIns.get(`users`, {
    params: {
      Email: userName,
      password: password,
    },
  });
