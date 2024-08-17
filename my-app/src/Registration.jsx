import React, { useState } from 'react';
import {

  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline'


function RegistrationForm() {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}`);
    alert(`Class: ${className}`);
    alert(`Roll No: ${rollNo}`);
    alert(`DOB: ${dob}`);
    // Handle registration logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Card>
        <CardContent>
          <Typography component="h1" variant="h5" align="center">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="class"
              label="Class"
              name="class"
              autoComplete="class"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="rollNo"
              label="Roll No"
              name="rollNo"
              autoComplete="rollNo"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="dob"
              label="Date of Birth"
              name="dob"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RegistrationForm;
