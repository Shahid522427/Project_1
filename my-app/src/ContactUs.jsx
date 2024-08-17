import { Container, TextField, Button, Typography } from '@mui/material';

const ContactUs = () => (
  <Container>
    <Typography variant="h4">Contact Us</Typography>
    <form>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
      <Button variant="contained" color="primary">Send</Button>
    </form>
  </Container>
);

export default ContactUs;
