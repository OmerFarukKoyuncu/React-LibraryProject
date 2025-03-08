/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { green, grey } from "@mui/material/colors";
import { bookInitialState, bookreduser } from "../redusers/bookReduser";
const defaultImg =
  "https://app.ampco.com.sa/storage/uploads/product_images/default.png";

const BookCreate = () => {
  const navigate = useNavigate();
  const imgInput = useRef();
  const img = useRef();
  const [book, setBook] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [authors, setAuthors] = useState([]);
  const [seletedAuthor, setSeletedAuthor] = useState();
  const [state, dispatch] = useReducer(bookreduser, bookInitialState);

  useEffect(() => {
    dispatch({ type: "getCategoryWithAuthors" });
  }, []);

  const getCategoriesWithAuthors = async () => {
    const { categories, authors } = await state;
    setAuthors(authors);
    setCategories(categories);
  };

  useEffect(() => {
    if (!state) {
      return;
    }

    getCategoriesWithAuthors();
  }, [state]);

  const handleBoxClick = () => {
    imgInput.current.click();
  };

  const uploadImg = (e) => {
    const fileReader = new FileReader();
    const { files } = e.target;

    if (files && files.length) {
      const file = files[0];
      fileReader.onload = () => {
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

    const createdBook = {
      ...book,
      AuthorId: seletedAuthor.Id,
      CategoryId: selectedCategory.Id,
      Image: img.current.src,
    };

    dispatch({ type: "bookCreate", payload: createdBook });

    navigate("/", { replace: true });
  };

  return (
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
          <img ref={img} src={book?.Image ?? defaultImg} width={300} />
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
          value={book?.Title}
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
          value={book?.Description}
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
          sx={{ m: 2, p: 2, backgroundColor: green[800], width: "30%" }}
        >
          Yeni Kitap Ekle
        </Button>
        <Button
          type="button"
          variant="contained"
          sx={{ m: 2, p: 2, backgroundColor: grey[500], width: "30%" }}
        >
          <Link to="/" replace className="nav-link">
            Listeye Dön
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default BookCreate;
