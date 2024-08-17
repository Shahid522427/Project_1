import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const services = [
  { name: 'Service 1', description: 'Description 1', price: '$100' },
  { name: 'Service 2', description: 'Description 2', price: '$200' },
  { name: 'Service 3', description: 'Description 3', price: '$300' },


  { name: 'Service 1', description: 'Description 1', price: '$100' },
  { name: 'Service 2', description: 'Description 2', price: '$200' },
  { name: 'Service 3', description: 'Description 3', price: '$300' },






];

const ServicesSection = () => (
  <Container>
    <Grid container spacing={2}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{service.name}</Typography>
              <Typography variant="body2">{service.description}</Typography>
              <Typography variant="h6">{service.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesSection;
