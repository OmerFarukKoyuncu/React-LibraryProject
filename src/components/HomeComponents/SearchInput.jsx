import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

const SearchInput = ({ handleSearch, searchValue }) => {
  return (
    <Box sx={{ m: 2 }}>
      <TextField
        placeholder="Kitap Adı Yazın"
        onChange={(e) => handleSearch(e.target.value)}
      >
        {searchValue}
      </TextField>
    </Box>
  );
};

export default SearchInput;
