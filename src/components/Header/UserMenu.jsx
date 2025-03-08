/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import { userMenu } from "../../utils/readonly/userMenuItem";
import MenuContext from "../../contexts/MenuContext";

const UserMenu = () => {
  const { logOut, auth, isAdmin } = useContext(AuthContext);
  const { isVertical, setIsVertical } = useContext(MenuContext);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const settings = useMemo(
    () => userMenu(isAdmin, isVertical, setIsVertical, setAnchorElUser, logOut),
    [isAdmin, isVertical]
  );

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Typography
            sx={{
              color: "rgb(249, 249, 249)",
              fontWeight: "bolder",
              fontSize: "17px",
            }}
          >
            HOŞGELDİN, {auth?.FullName}
          </Typography>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "rigth",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => (
          <MenuItem key={index} sx={setting.sx} onClick={setting.click}>
            <Typography textAlign={"center"}>{setting.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
