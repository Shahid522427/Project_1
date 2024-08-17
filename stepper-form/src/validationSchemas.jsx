import * as Yup from 'yup';

export const productValidationSchema = Yup.object({
  productName: Yup.string().required('Product Name is required'),
});

export const customerValidationSchema = Yup.object({
  customerName: Yup.string().required('Customer Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

export const paymentValidationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, 'Card number must be exactly 16 digits')
    .required('Card Number is required'),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiry date')
    .required('Expiry Date is required'),
});
