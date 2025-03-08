import { Box, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import React from "react";

const CreateButton = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Button sx={{ backgroundColor: blue[500] }}>
        <Link className="nav-link" to="book-create" replace>
          Yeni Kitap Ekle
        </Link>
      </Button>
    </Box>
  );
};

export default CreateButton;
