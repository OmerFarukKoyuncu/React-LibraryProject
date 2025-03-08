import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const VerticalNavItem = ({ verticalItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ListItemButton onClick={() => setOpen(!open)}>
        <Link className="nav-link" to={verticalItem.to}>
          <ListItemText>{verticalItem.text}</ListItemText>
        </Link>
      </ListItemButton>
      {verticalItem.sub && (
        <Collapse in={open}>
          <List>
            {verticalItem.sub.map((sub, index) => (
              <ListItemButton key={sub.id + index}>
                <Link replace className="nav-link" to={sub.to}>
                  <ListItemText>{sub.text}</ListItemText>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default VerticalNavItem;
