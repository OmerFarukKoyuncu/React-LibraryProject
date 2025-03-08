import React, { useContext } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Box, Grid2 } from "@mui/material";
import VerticalNav from "../components/VerticalNav/VerticalNav";
import MenuContext from "../contexts/MenuContext";

const Main = () => {
  const { isVertical, showSide } = useContext(MenuContext);
  return (
    <Box sx={{ width: "90vw", m: 2, p: 2 }}>
      <Header />
      <Grid2 container spacing={1}>
        {isVertical && (
          <Grid2 size={2}>
            <VerticalNav />
          </Grid2>
        )}
        <Grid2 size={isVertical && showSide ? 10 : 12}>
          <Outlet />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Main;
