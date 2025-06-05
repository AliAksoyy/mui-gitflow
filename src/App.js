import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        <h1>MUI Örnekleri</h1>
        <p>Sol taraftaki menüden örnek bileşenleri inceleyebilirsiniz.</p>
      </Box>
    </Box>
  );
}

export default App;
