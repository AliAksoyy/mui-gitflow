import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
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
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar onComponentChange={setCurrentComponent}>
        {renderComponent()}
      </Sidebar>
    </Box>
  );
}

export default App;
