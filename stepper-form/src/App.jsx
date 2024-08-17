import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StepperForm from './StepperForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StepperForm />} />
      </Routes>
    </Router>
  );
};

export default App;
