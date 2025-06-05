import React from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  Typography,
  Paper,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Delete, Send, Save, Favorite } from "@mui/icons-material";

const ButtonExamples = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Button Örnekleri
      </Typography>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Text Buton</Button>
          <Button variant="contained">Contained Buton</Button>
          <Button variant="outlined">Outlined Buton</Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <IconButton aria-label="delete" color="error">
            <Delete />
          </IconButton>
          <IconButton aria-label="favorite" color="primary">
            <Favorite />
          </IconButton>
        </Stack>

        <ButtonGroup variant="contained">
          <Button>Sol</Button>
          <Button>Orta</Button>
          <Button>Sağ</Button>
        </ButtonGroup>

        <Stack direction="row" spacing={2}>
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
          <Button variant="contained" startIcon={<Send />}>
            Gönder
          </Button>
          <Button variant="contained" endIcon={<Save />}>
            Kaydet
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ButtonExamples;
