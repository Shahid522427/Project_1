import { TextField, Button, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { customerValidationSchema } from './validationSchemas';

const CustomerForm = ({ handleNext, handleBack }) => (
  <Formik
    initialValues={{ customerName: '', email: '' }}
    validationSchema={customerValidationSchema}
    onSubmit={(values) => handleNext(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <Box mb={3}>
          <Field
            as={TextField}
            name="customerName"
            label="Customer Name"
            fullWidth
            error={touched.customerName && !!errors.customerName}
            helperText={touched.customerName && errors.customerName}
          />
        </Box>
        <Box mb={3}>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
        </Box>
        <Button onClick={handleBack} variant="outlined" color="primary">Back</Button>
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: 8 }}>Next</Button>
      </Form>
    )}
  </Formik>
);

export default CustomerForm;
