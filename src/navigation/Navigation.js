import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from '../components/Booking';
function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
