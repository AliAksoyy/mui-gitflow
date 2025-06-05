import React from "react";
import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Badge,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Mail, Face } from "@mui/icons-material";

const DataDisplayExamples = () => {
  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    createData("Dondurma", 237, 9.0, 37, 4.3),
    createData("Donut", 262, 16.0, 24, 6.0),
    createData("Pizza", 305, 3.7, 67, 4.3),
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Veri Görüntüleme Bileşenleri
      </Typography>

      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <Chip label="Chip" />
          <Chip label="Silinebilir" onDelete={() => {}} />
          <Chip label="Tıklanabilir" onClick={() => {}} color="primary" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Badge badgeContent={4} color="primary">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
        </Stack>

        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Face />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Liste Örneği" secondary="Alt metin örneği" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar>A</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="İkinci Öğe"
              secondary="Başka bir alt metin"
            />
          </ListItem>
        </List>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tatlı (100g)</TableCell>
                <TableCell align="right">Kalori</TableCell>
                <TableCell align="right">Yağ&nbsp;(g)</TableCell>
                <TableCell align="right">Karb&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" spacing={2}>
          <Tooltip title="Tooltip Örneği">
            <Typography>Üzerine gelin</Typography>
          </Tooltip>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default DataDisplayExamples;
