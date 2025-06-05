import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Switch,
  Stack,
  Typography,
  Paper,
  Slider,
  InputAdornment,
  FormGroup,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const FormExamples = () => {
  const [age, setAge] = useState("");
  const [sliderValue, setSliderValue] = useState(30);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Form Elemanları
      </Typography>

      <Stack spacing={3}>
        <TextField label="Standart" variant="standard" />

        <TextField
          label="Outlined"
          variant="outlined"
          helperText="Yardımcı metin"
        />

        <TextField
          label="Kullanıcı Adı"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <FormControl>
          <FormLabel>Cinsiyet</FormLabel>
          <RadioGroup row defaultValue="kadin">
            <FormControlLabel value="kadin" control={<Radio />} label="Kadın" />
            <FormControlLabel value="erkek" control={<Radio />} label="Erkek" />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
          <FormLabel>Yaş</FormLabel>
          <Select value={age} onChange={(e) => setAge(e.target.value)}>
            <MenuItem value={10}>10-20</MenuItem>
            <MenuItem value={20}>20-30</MenuItem>
            <MenuItem value={30}>30-40</MenuItem>
          </Select>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Checkbox 1"
          />
          <FormControlLabel control={<Checkbox />} label="Checkbox 2" />
        </FormGroup>

        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Switch Örneği"
        />

        <FormControl>
          <FormLabel>Slider Örneği</FormLabel>
          <Slider
            value={sliderValue}
            onChange={(e, newValue) => setSliderValue(newValue)}
            valueLabelDisplay="auto"
            marks
            min={0}
            max={100}
          />
        </FormControl>

        <TextField
          label="Çok Satırlı"
          multiline
          rows={4}
          defaultValue="Örnek çok satırlı metin alanı"
        />
      </Stack>
    </Paper>
  );
};

export default FormExamples;
