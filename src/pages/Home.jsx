/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { blue, grey, red, yellow } from "@mui/material/colors";
import DataTable from "../components/DataTable/DataTable";
import { booksTableHeaders } from "../utils/readonly/booksTableHeader";
import { homeInitialValue, homeReduser } from "../redusers/homeReduser";
import DetailsTwoToneIcon from "@mui/icons-material/DetailsTwoTone";
import UpdateTwoToneIcon from "@mui/icons-material/UpdateTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { Link } from "react-router-dom";
import CreateButton from "../components/HomeComponents/CreateButton";
import SearchInput from "../components/HomeComponents/SearchInput";
import DataList from "../components/List/DataList";
import MenuContext from "../contexts/MenuContext";

const imageCell = (image) => <img src={image} width="100px" height="100px" />;
const actions = (id, deleteItem) => (
  <Stack
    direction="row"
    spacing={2}
    sx={{ display: "flex", alignItems: "center" }}
  >
    <Link to={`book-detail/${id}`} replace>
      <DetailsTwoToneIcon sx={{ color: blue[300] }} />
    </Link>
    <Link to={`book-update/${id}`} replace>
      <UpdateTwoToneIcon sx={{ color: yellow[400] }} />
    </Link>
    <Link>
      <DeleteForeverTwoToneIcon
        role="button"
        sx={{ color: red[400] }}
        onClick={() => deleteItem(id)}
      />
    </Link>
  </Stack>
);

const Home = () => {
  const [books, setBooks] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [state, dispatch] = useReducer(homeReduser, homeInitialValue);
  const { isVertical } = useContext(MenuContext);

  const booksHeaders = useMemo(() => booksTableHeaders, []);

  const getBooks = async () => {
    const booksState = await state;
    const books = isVertical
      ? booksState.books.map((book) => {
          const img = book.Image;
          return {
            ...book,
            Image: imageCell(img),
            actions: actions(book.id, deleteBook),
          };
        })
      : booksState.books;
    setBooks(books);
  };

  const deleteBook = (id) => {
    dispatch({ type: "bookDelete", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "getAllBooks" });
  }, []);

  useEffect(() => {
    if (!state) {
      return;
    }

    getBooks();
  }, [state, isVertical]);

  const handleSearch = (searchValue) => {
    setSearchValue(searchValue);
    dispatch({ type: "getBookByName", payload: searchValue });
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: grey[200] }} component="section">
      <Box
        sx={{
          width: "100%",
          m: 1,
          p: 1,
          display: "flex",
          justifyContent: isVertical ? "space-between" : "end",
        }}
      >
        <Box sx={{ display: isVertical ? "block" : "none" }}>
          <CreateButton />
        </Box>
        <Box>
          <SearchInput handleSearch={handleSearch} searchValue={searchValue} />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        {books && isVertical ? (
          <DataTable datas={books} headers={booksHeaders} />
        ) : (
          <DataList datas={books} detail={"book-detail"} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
