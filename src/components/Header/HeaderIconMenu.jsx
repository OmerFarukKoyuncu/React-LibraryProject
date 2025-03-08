import { IconButton, Box, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import React from "react";

const HeaderIconMenu = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { sx: "block", md: "none" },
        }}
      >
        <MenuItem>
          <Link to="/" replace className="nav-link-active">
            <Typography
              sx={{
                alignItems: "center",
                color: "rgb(36, 36, 36)",
                fontWeight: "bolder",
              }}
            >
              ANA SAYFA
            </Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default HeaderIconMenu;
