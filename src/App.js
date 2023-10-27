import Carousel from './components/Carousel';
import MainPage from './components/MainPage';
import ResponsiveAppBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './components/Booking';
function App() {
  return (
    <Router>
      <div className='App'>
        <ResponsiveAppBar />
        {/* <Carousel />
        <MainPage /> */}
        <Booking />
      </div>
    </Router>
  );
}

export default App;
