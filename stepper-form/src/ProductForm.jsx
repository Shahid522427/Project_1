import { TextField, Button, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { productValidationSchema } from './validationSchemas';

const ProductForm = ({ handleNext }) => (
  <Formik
    initialValues={{ productName: '' }}
    validationSchema={productValidationSchema}
    onSubmit={(values) => handleNext(values)}
  >
    {({ errors, touched }) => (
      <Form>
        <Box mb={3}>
          <Field
            as={TextField}
            name="productName"
            label="Product Name"
            fullWidth
            error={touched.productName && !!errors.productName}
            helperText={touched.productName && errors.productName}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">Next</Button>
      </Form>
    )}
  </Formik>
);

export default ProductForm;
