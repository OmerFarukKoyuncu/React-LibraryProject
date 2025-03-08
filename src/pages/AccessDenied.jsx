import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3">
        Bu Sayfaya Erişim İzniniz Bulunmamaktadır
      </Typography>
      <Typography variant="body1">
        Uygulamaya devam etmek için
        <Link to={"/"} replace>
          Anasayfa
        </Link>
        'ya dön...
      </Typography>
    </Box>
  );
};

export default AccessDenied;
