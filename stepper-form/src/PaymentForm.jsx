import { TextField, Button, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { paymentValidationSchema } from './validationSchemas';

const PaymentForm = ({ handleNext, handleBack }) => (
  <Formik
    initialValues={{ cardNumber: '', expiryDate: '' }}
    validationSchema={paymentValidationSchema}
    onSubmit={(values) => handleNext(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <Box mb={3}>
          <Field
            as={TextField}
            name="cardNumber"
            label="Card Number"
            fullWidth
            error={touched.cardNumber && !!errors.cardNumber}
            helperText={touched.cardNumber && errors.cardNumber}
          />
        </Box>
        <Box mb={3}>
          <Field
            as={TextField}
            name="expiryDate"
            label="Expiry Date (MM/YY)"
            fullWidth
            error={touched.expiryDate && !!errors.expiryDate}
            helperText={touched.expiryDate && errors.expiryDate}
          />
        </Box>
        <Button onClick={handleBack} variant="outlined" color="primary">Back</Button>
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: 8 }}>Submit</Button>
      </Form>
    )}
  </Formik>
);

export default PaymentForm;
