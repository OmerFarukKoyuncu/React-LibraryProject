import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const THead = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header.id}
            align={header.align}
            style={{
              minWidth: header.minWidth,
              fontSize: 16,
              fontWeight: "bolder",
            }}
          >
            {header.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default THead;
