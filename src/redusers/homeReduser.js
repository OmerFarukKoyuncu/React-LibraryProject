import { bookDelete, getAllBoks } from "../utils/services/bookService";

export const homeInitialValue = {
  books: [],
};

export const homeReduser = async (state, action) => {
  switch (action.type) {
    case "getAllBooks": {
      const res = await getAllBoks();
      const books = await res.data;
      return { ...state, books: books };
    }
    case "getBookByName": {
      const title = action.payload.toLowerCase();
      const res = await getAllBoks();
      const books = title
        ? res.data.filter((book) => book.Title.toLowerCase().includes(title))
        : res.data;

      return { ...state, books: books };
    }
    case "bookDelete": {
      const id = action.payload;
      const [deleted, books] = await Promise.all([
        bookDelete(id),
        getAllBoks(),
      ]);
      return { ...state, books: books.data };
    }
    default:
      return { ...state };
  }
};
