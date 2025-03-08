import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";

const TBody = ({ headers, datas, page, rowsPerPage }) => {
  return (
    <TableBody>
      {datas
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data) => (
          <TableRow key={data.id}>
            {headers.map((header) => {
              const value = data[header.id];
              return (
                <TableCell key={header.id} align={header.align}>
                  {header.format && typeof value === "number"
                    ? header.format(value)
                    : value}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
    </TableBody>
  );
};

export default TBody;
