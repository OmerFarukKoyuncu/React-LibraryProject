import axiosIns from "../../middlewares/axios/axios";

export const getAllAuthors = async () => await axiosIns.get(`authors`);

export const getAuthorById = async (id) => await axiosIns.get(`authors/${id}`);
