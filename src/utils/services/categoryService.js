import axiosIns from "../../middlewares/axios/axios";

export const getAllCategories = async () => await axiosIns.get(`categories`);

export const getCategoryById = async (id) =>
  await axiosIns.get(`categories/${id}`);
