import React, { useState } from 'react';
import {
  Alert,
  AlertTitle,
  Snackbar,
  CircularProgress,
  LinearProgress,
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  Typography,
  Paper
} from '@mui/material';

const FeedbackExamples = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Feedback Bileşenleri
      </Typography>

      <Stack spacing={3}>
        <Stack spacing={2}>
          <Alert severity="error">
            <AlertTitle>Hata</AlertTitle>
            Bu bir hata mesajıdır
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Uyarı</AlertTitle>
            Bu bir uyarı mesajıdır
          </Alert>
          <Alert severity="info">
            <AlertTitle>Bilgi</AlertTitle>
            Bu bir bilgi mesajıdır
          </Alert>
          <Alert severity="success">
            <AlertTitle>Başarılı</AlertTitle>
            Bu bir başarı mesajıdır
          </Alert>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress variant="determinate" value={75} />
        </Stack>

        <Stack spacing={2}>
          <LinearProgress />
          <LinearProgress color="secondary" />
          <LinearProgress variant="determinate" value={60} />
          <LinearProgress variant="buffer" value={60} valueBuffer={80} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Dialog Aç
          </Button>
          <Button variant="contained" onClick={() => setSnackbarOpen(true)}>
            Snackbar Göster
          </Button>
          <Button variant="contained" onClick={() => setBackdropOpen(true)}>
            Backdrop Göster
          </Button>
        </Stack>

        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>
            Dialog Başlığı
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Bu bir dialog örneğidir. Dialoglar önemli bilgileri göstermek veya
              kullanıcıdan input almak için kullanılır.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>İptal</Button>
            <Button onClick={handleClose} autoFocus>
              Tamam
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Bu bir snackbar mesajıdır"
        />

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropOpen}
          onClick={() => setBackdropOpen(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Stack>
    </Paper>
  );
};

export default FeedbackExamples; 