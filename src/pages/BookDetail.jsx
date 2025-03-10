import { Box, Button } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import CardWithDescription from "../components/Cards/CardWithDescription";
import { Link, useParams } from "react-router-dom";
import { bookInitialState, bookreduser } from "../redusers/bookReduser";
import { grey } from "@mui/material/colors";
grey;

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
      <Button
        className="nav-link"
        type="button"
        variant="contained"
        to="/"
        sx={{ m: 2, p: 2, backgroundColor: grey[500], width: "30%" }}
        component={Link}
        replace
      >
        Listeye Dön
      </Button>
    </Box>
  );
};

export default BookDetail;
