import React, { useContext, useState } from "react";
import { AppBar, Box, Container, Toolbar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";
import HeaderIconMenu from "./HeaderIconMenu";
import HeaderButtonMenu from "./HeaderButtonMenu";
import UserMenu from "./UserMenu";
import MenuContext from "../../contexts/MenuContext";

const Header = () => {
  const { isVertical, showSide, setShowSide } = useContext(MenuContext);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: blueGrey[600], width: "100%" }}
    >
      <Container>
        <Toolbar disableGutters>
          {isVertical && (
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setShowSide(!showSide)}
                color="inherit"
              >
                <Menu />
              </IconButton>
            </Box>
          )}
          {!isVertical && (
            <>
              <HeaderIconMenu
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
                handleOpenNavMenu={handleOpenNavMenu}
              />
              <HeaderButtonMenu handleCloseNavMenu={handleCloseNavMenu} />
            </>
          )}
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
