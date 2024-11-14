// src/components/Trending.js
// import React from 'react';
import { Card, Typography } from "@mui/material";

const Trending = () => {
  return (
    <Card style={{ padding: 20 }}>
      <Typography variant="h6">Trending Now</Typography>
      <Typography>Semiconductor Industry</Typography>
      <Typography>Indian Banks</Typography>
      <Typography>Retail Inflation</Typography>
      {/* More items as per the image */}
    </Card>
  );
};

export default Trending;
