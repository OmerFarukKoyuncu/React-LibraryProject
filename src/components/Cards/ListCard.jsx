import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ListCard = ({ data }) => {
  return (
    <Card sx={{ width: 300, height: 400, m: 2, p: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="article">
          {data.Title}
        </Typography>
      </CardContent>
      <CardMedia
        component={"img"}
        image={data.Image}
        alt={data.Title}
        sx={{ objectFit: "inherit" }}
      />
    </Card>
  );
};

export default ListCard;
