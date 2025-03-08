import axiosIns from "../../middlewares/axios/axios";

export const getAllBoks = async () => await axiosIns.get(`books`);

export const getBookById = async (id) => await axiosIns.get(`books/${id}`);

export const bookUpdate = async (book, id) =>
  await axiosIns.put(`books/${id}`, book);

export const bookCreate = async (book) => await axiosIns.post(`books`, book);

export const bookDelete = async (id) => await axiosIns.delete(`books/${id}`);
