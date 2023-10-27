import Carousel from './components/Carousel';
import MainPage from './components/MainPage';
import ResponsiveAppBar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <ResponsiveAppBar />
        <Carousel />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
