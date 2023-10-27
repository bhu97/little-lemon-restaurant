import ResponsiveAppBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './components/Booking';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
