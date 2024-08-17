import { useState } from 'react';
import { Stepper, Step, StepLabel, Container, Box, Typography } from '@mui/material';
import ProductForm from './ProductForm';
import CustomerForm from './CustomerForm';
import PaymentForm from './PaymentForm';

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});

  const steps = ['Product Name', 'Customer Details', 'Payment Details'];

  const handleNext = (values) => {
    setFormValues({ ...formValues, ...values });
    if (activeStep === steps.length - 1) {
      // Form submission logic
      console.log('Form submitted', formValues);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <ProductForm handleNext={handleNext} />;
      case 1:
        return <CustomerForm handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <PaymentForm handleNext={handleNext} handleBack={handleBack} />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={3}>
        {activeStep === steps.length ? (
          <Typography variant="h5">All steps completed</Typography>
        ) : (
          getStepContent(activeStep)
        )}
      </Box>
    </Container>
  );
};

export default StepperForm;
