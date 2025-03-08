import { Box, List } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React, { useContext } from "react";
import { verticalMenu } from "../../utils/readonly/verticalMenu";
import VerticalNavItem from "./VerticalNavItem";
import MenuContext from "../../contexts/MenuContext";

const VerticalNav = () => {
  const { showSide } = useContext(MenuContext);
  return (
    <Box
      sx={{
        backgroundColor: blueGrey[600],
        height: "100%",
        display: showSide ? "block" : "none",
      }}
    >
      <List sx={{ position: "sticky", top: 0 }}>
        {verticalMenu.map((verticalItem, index) => (
          <VerticalNavItem
            key={verticalItem.id + index}
            verticalItem={verticalItem}
          />
        ))}
      </List>
    </Box>
  );
};

export default VerticalNav;
