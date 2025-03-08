import { Box, List } from "@mui/material";
import React from "react";
import DataListItem from "./DataListItem";

const DataList = ({ datas, detail }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {datas && (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "row",
            margin: "5px",
            padding: "5px",
            flexWrap: "wrap",
          }}
        >
          {datas?.map((item, index) => (
            <DataListItem
              key={item.Id + index}
              listItem={item}
              detail={detail}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default DataList;
