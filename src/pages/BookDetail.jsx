import { Box } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import CardWithDescription from "../components/Cards/CardWithDescription";
import { useParams } from "react-router-dom";
import { bookInitialState, bookreduser } from "../redusers/bookReduser";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [state, dispatch] = useReducer(bookreduser, bookInitialState);

  useEffect(() => {
    dispatch({ type: "getBookById", payload: bookId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBook = async () => {
    const bookState = await state;
    setBook(bookState.book);
  };

  useEffect(() => {
    if (!state) {
      return;
    }

    getBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {book && <CardWithDescription data={book} />}
    </Box>
  );
};

export default BookDetail;
