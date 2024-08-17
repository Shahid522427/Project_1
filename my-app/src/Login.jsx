import { Container, TextField, Button, Typography } from '@mui/material';

const Login = () => (
  <Container>
    <Typography variant="h4">Login</Typography>
    <form>
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Login</Button>
    </form>
  </Container>
);

export default Login;
