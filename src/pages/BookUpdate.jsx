/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { bookInitialState, bookreduser } from "../redusers/bookReduser";
const defaultImg =
  "https://app.ampco.com.sa/storage/uploads/product_images/default.png";
const BookUpdate = () => {
  const imgInput = useRef();
  const img = useRef();
  const { bookId } = useParams();
  const [book, setBook] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [authors, setAuthors] = useState([]);
  const [seletedAuthor, setSeletedAuthor] = useState();
  const [state, dispatch] = useReducer(bookreduser, bookInitialState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "getBookCategoryWithAuthors", payload: bookId });
  }, []);

  const getBook = async () => {
    const { book, categories, authors } = await state;
    const author = authors.find((author) => author.Id === book.AuthorId);
    const category = categories.find(
      (category) => category.Id === book.CategoryId
    );
    setSeletedAuthor(author);
    setSelectedCategory(category);
    setBook(book);
    setCategories(categories);
    setAuthors(authors);
  };

  useEffect(() => {
    if (!state) {
      return;
    }
    getBook();
  }, [state]);

  const handleBoxClick = () => {
    imgInput.current.click();
  };

  const uploadImg = (e) => {
    const fileReader = new FileReader();
    const { files } = e.target;

    if (files && files.length) {
      const file = files[0];
      fileReader.onload = async () => {
        const result = fileReader.result;
        img.current.src = result;
      };

      fileReader.readAsDataURL(file);
    }
  };

  const handleChangeAuthor = (e) => {
    const author = e.target.value;
    setSeletedAuthor(author);
  };

  const handleChangeCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...book,
      AuthorId: seletedAuthor.Id,
      CategoryId: selectedCategory.Id,
      Image: img.current.src,
    };

    dispatch({
      type: "bookUpdate",
      payload: { id: bookId, book: updatedBook },
    });

    navigate("/", { replace: true });
  };

  return (
    book && (
      <Box
        component={"form"}
        sx={{
          m: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <FormControl sx={{ width: "60%", m: 2 }}>
          <Box
            component={"article"}
            onClick={handleBoxClick}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img ref={img} src={book.Image ?? defaultImg} width={300} />
            <input
              ref={imgInput}
              type="file"
              hidden
              accept="image/*"
              onChange={uploadImg}
            />
            <FormLabel>Resim Seçin</FormLabel>
          </Box>
        </FormControl>
        <FormControl sx={{ width: "60%", m: 2 }}>
          <TextField
            required
            id="title"
            placeholder="Kitap Adını Giriniz"
            value={book.Title}
            onChange={(e) => setBook({ ...book, Title: e.target.value })}
          />
        </FormControl>
        <FormControl sx={{ width: "60%", m: 2 }}>
          <TextField
            required
            id="description"
            placeholder="Kitap Özetini Giriniz"
            multiline
            rows={10}
            value={book.Description}
            onChange={(e) => setBook({ ...book, Description: e.target.value })}
          />
        </FormControl>
        <Box
          sx={{
            width: "100%",
            m: 2,
            p: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControl sx={{ width: "30%", m: 1 }}>
            <InputLabel id="author-name">Yazar Seçin</InputLabel>
            <Select
              labelId="author-name"
              id="author-select"
              value={seletedAuthor}
              label="Yazar Seçiniz"
              onChange={handleChangeAuthor}
            >
              {authors.map((author) => (
                <MenuItem key={author.Id} value={author}>
                  {author.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "30%", m: 1 }}>
            <InputLabel id="category-name">Kategori Seçin</InputLabel>
            <Select
              labelId="category-name"
              id="category-select"
              value={selectedCategory}
              label="Kategori Seçin"
              onChange={handleChangeCategory}
            >
              {categories.map((category) => (
                <MenuItem key={category.Id} value={category}>
                  {category.Name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box component={"div"} sx={{ m: 2, p: 2, width: "60%" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ m: 2, p: 2, backgroundColor: yellow[800], width: "30%" }}
          >
            Kitabı Güncelle
          </Button>
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
      </Box>
    )
  );
};

export default BookUpdate;
