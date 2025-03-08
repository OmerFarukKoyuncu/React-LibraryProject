import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const CardWithDescription = ({ data }) => {
  return (
    <Card sx={{ width: "40%" }}>
      <CardMedia
        component={"img"}
        image={data.Image}
        height={"400"}
        alt={data.Title}
        sx={{ objectFit: "inherit" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="article">
          {data.Title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWithDescription;
