import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderButtonMenu = ({ handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Button
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        <NavLink
          to="/"
          replace
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "rgb(236, 236, 236)",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            ANA SAYFA
          </Typography>
        </NavLink>
      </Button>
    </Box>
  );
};

export default HeaderButtonMenu;
