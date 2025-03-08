import { TablePagination } from "@mui/material";
import React from "react";

const TPagination = ({
  dataLength,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      component="div"
      count={dataLength}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 15, 20]}
    />
  );
};

export default TPagination;
