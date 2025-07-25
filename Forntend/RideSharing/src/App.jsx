import UserDashboard from './pages/user/UserDashboard';
import DriverDashboard from './pages/driver/DriverDashboard';
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import SignUp from "./pages/common/SignUp";
import About from './pages/common/About';
import Contact from './pages/common/Contact';
import Help from './pages/common/Help';
import Profile from './pages/common/Profile';
import Notifications from './pages/common/Notifications';
import AdminDashboard from './pages/admin/AdminDashboard';
import RideDetails from './pages/common/RideDetails';
import Wallet from './pages/common/Wallet';
import Reviews from './pages/common/Reviews';
import Support from './pages/common/Support';
import Terms from './pages/common/Terms';
import Privacy from './pages/common/Privacy';
import NotFound from './pages/common/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/ride/:id" element={<RideDetails />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* Protected Role Routes */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="User">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/driver"
          element={
            <ProtectedRoute role="Driver">
              <DriverDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
