import React from "react";
import {
  Grid,
  Paper,
  Box,
  Stack,
  Typography,
  ImageList,
  ImageListItem,
  Divider,
} from "@mui/material";

const LayoutExamples = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Kahvaltı",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Kamera",
    },
  
  ];

  return (
    <Stack spacing={4}>
      <Typography variant="h5" gutterBottom>
        Layout Bileşenleri
      </Typography>

      {/* Grid Sistemi Örneği */}
      <Box sx={{ flexGrow: 1, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "primary.light",
                color: "white",
              }}
            >
              xs=12 sm=6 md=4
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "secondary.light",
                color: "white",
              }}
            >
              xs=12 sm=6 md=4
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "error.light",
                color: "white",
              }}
            >
              xs=12 sm=12 md=4
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Stack Örneği */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
        <Paper sx={{ p: 2, bgcolor: "primary.light", color: "white", flex: 1 }}>
          Item 1
        </Paper>
        <Paper
          sx={{ p: 2, bgcolor: "secondary.light", color: "white", flex: 1 }}
        >
          Item 2
        </Paper>
        <Paper sx={{ p: 2, bgcolor: "error.light", color: "white", flex: 1 }}>
          Item 3
        </Paper>
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Card Layout Örneği */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>

      {/* ImageList Örneği */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          ImageList Örneği
        </Typography>
        <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default LayoutExamples;
