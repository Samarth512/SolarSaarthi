import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/SignupPage';
import AuthCallback from './AuthCallback';
import SignupOptions from './Pages/SignupOptions';
import LoginPage from './Pages/LoginPage';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupOptions />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;