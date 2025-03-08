import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ListCard from "../Cards/ListCard";

const DataListItem = ({ listItem, detail }) => {
  return (
    <ListItem sx={{ width: "max-content" }}>
      <Link className="list-link" to={`${detail}/${listItem.id}`} replace>
        <ListCard data={listItem} />
      </Link>
    </ListItem>
  );
};

export default DataListItem;
