import React, { useState } from "react";
import { Box, CssBaseline, Paper } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ButtonExamples from "./components/ButtonExamples";
import FormExamples from "./components/FormExamples";
import DataDisplayExamples from "./components/DataDisplayExamples";
import FeedbackExamples from "./components/FeedbackExamples";
import NavigationExamples from "./components/NavigationExamples";
import LayoutExamples from "./components/LayoutExamples";
import "./App.css";

function App() {
  const [currentComponent, setCurrentComponent] = useState("buttons");

  const renderComponent = () => {
    const component = (() => {
      switch (currentComponent) {
        case "buttons":
          return <ButtonExamples />;
        case "forms":
          return <FormExamples />;
        case "data":
          return <DataDisplayExamples />;
        case "feedback":
          return <FeedbackExamples />;
        case "navigation":
          return <NavigationExamples />;
        case "layout":
          return <LayoutExamples />;
        default:
          return <ButtonExamples />;
      }
    })();

    return (
      <Box sx={{ p: 3, width: "100%", bgcolor: "background.default" }}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            minHeight: "calc(100vh - 48px)", // 48px is total padding (24px * 2)
          }}
        >
          {component}
        </Paper>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <Sidebar onComponentChange={setCurrentComponent}>
        {renderComponent()}
      </Sidebar>
    </Box>
  );
}

export default App;
