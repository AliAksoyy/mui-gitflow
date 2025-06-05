import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
  Typography,
  Box,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Home,
  Menu as MenuIcon,
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
  Dashboard,
  Settings,
  SmartButton,
  Input,
  TableChart,
  Feedback,
  Navigation,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainContent = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  width: "100%",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Sidebar = ({ onComponentChange, children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [componentsOpen, setComponentsOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleComponentsClick = () => {
    setComponentsOpen(!componentsOpen);
  };

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        sx={{
          position: "fixed",
          left: 0,
          top: 10,
          zIndex: theme.zIndex.drawer + 2,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, ml: 2 }}
          >
            MUI Örnekleri :D
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Ana Sayfa" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={handleComponentsClick}>
            <ListItemText primary="Bileşenler" />
            {componentsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => onComponentChange("buttons")}
              >
                <ListItemIcon>
                  <SmartButton />
                </ListItemIcon>
                <ListItemText primary="Butonlar" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => onComponentChange("forms")}
              >
                <ListItemIcon>
                  <Input />
                </ListItemIcon>
                <ListItemText primary="Form Elemanları" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => onComponentChange("data")}
              >
                <ListItemIcon>
                  <TableChart />
                </ListItemIcon>
                <ListItemText primary="Veri Görüntüleme" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => onComponentChange("feedback")}
              >
                <ListItemIcon>
                  <Feedback />
                </ListItemIcon>
                <ListItemText primary="Feedback" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => onComponentChange("navigation")}
              >
                <ListItemIcon>
                  <Navigation />
                </ListItemIcon>
                <ListItemText primary="Navigasyon" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => onComponentChange("layout")}
              >
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Layout" />
              </ListItemButton>
            </List>
          </Collapse>

          <Divider sx={{ my: 1 }} />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Ayarlar" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <MainContent open={open}>{children}</MainContent>
    </Box>
  );
};

export default Sidebar;
