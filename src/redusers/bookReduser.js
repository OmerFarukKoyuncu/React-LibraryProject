import {
  bookCreate,
  bookUpdate,
  getBookById,
} from "../utils/services/bookService";
import { getAllCategories } from "../utils/services/categoryService";
import { getAllAuthors } from "../utils/services/authorService";

export const bookInitialState = {
  books: [],
  book: null,
  categories: [],
  authors: [],
  response: {},
};

export const bookreduser = async (state, action) => {
  switch (action.type) {
    case "getBookById": {
      const bookId = action.payload;
      const res = await getBookById(bookId);
      return { ...state, book: res.data };
    }
    case "getBookCategoryWithAuthors": {
      const [book, categories, authors] = await Promise.all([
        getBookById(action.payload),
        getAllCategories(),
        getAllAuthors(),
      ]);
      return {
        ...state,
        book: book.data,
        categories: categories.data,
        authors: authors.data,
      };
    }
    case "getCategoryWithAuthors": {
      const [categories, authors] = await Promise.all([
        getAllCategories(),
        getAllAuthors(),
      ]);
      return { ...state, categories: categories.data, authors: authors.data };
    }
    case "bookUpdate": {
      const id = action.payload.id;
      const book = action.payload.book;
      const res = await bookUpdate(book, id);
      return { ...state, response: res };
    }
    case "bookCreate": {
      const book = action.payload;
      const res = await bookCreate(book);
      return { ...state, response: res };
    }
    default:
      return { ...state };
  }
};
