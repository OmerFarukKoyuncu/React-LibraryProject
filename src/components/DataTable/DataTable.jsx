import React, { useState } from "react";
import { Paper, Table, TableContainer } from "@mui/material";
import THead from "./THead";
import TBody from "./TBody";
import TPagination from "./TPagination";

const DataTable = ({ headers, datas }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    const value = e.target.value;
    setRowsPerPage(+value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500, width: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <THead headers={headers} />
          <TBody
            headers={headers}
            datas={datas}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TPagination
        dataLength={datas.length}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
