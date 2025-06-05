import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Breadcrumbs,
  Link,
  BottomNavigation,
  BottomNavigationAction,
  Tabs,
  Tab,
  Paper,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import {
  Home,
  Favorite,
  LocationOn,
  FileCopy,
  Save,
  Print,
  Share,
} from "@mui/icons-material";

const NavigationExamples = () => {
  const [value, setValue] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const steps = ["Adım 1", "Adım 2", "Adım 3"];
  const actions = [
    { icon: <FileCopy />, name: "Kopyala" },
    { icon: <Save />, name: "Kaydet" },
    { icon: <Print />, name: "Yazdır" },
    { icon: <Share />, name: "Paylaş" },
  ];

  return (
    <Stack spacing={4}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Navigasyon Bileşenleri
        </Typography>

        {/* AppBar Örneği */}
        <AppBar position="static" sx={{ mb: 3 }}>
          <Toolbar>
            <Typography variant="h6">AppBar Örneği</Typography>
          </Toolbar>
        </AppBar>

        {/* Breadcrumbs Örneği */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault()}>
              Ana Sayfa
            </Link>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault()}>
              Kategori
            </Link>
            <Typography color="text.primary">Mevcut Sayfa</Typography>
          </Breadcrumbs>
        </Box>

        {/* Tabs Örneği */}
        <Box sx={{ mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
          >
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Tabs>
        </Box>

        {/* Stepper Örneği */}
        <Box sx={{ mb: 3 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* SpeedDial Örneği */}
        <Box sx={{ height: 100, position: "relative", mb: 3 }}>
          <SpeedDial
            ariaLabel="SpeedDial örneği"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>

        {/* Bottom Navigation Örneği */}
        <Paper sx={{ position: "relative" }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Ana Sayfa" icon={<Home />} />
            <BottomNavigationAction label="Favoriler" icon={<Favorite />} />
            <BottomNavigationAction label="Konum" icon={<LocationOn />} />
          </BottomNavigation>
        </Paper>
      </Paper>
    </Stack>
  );
};

export default NavigationExamples;
