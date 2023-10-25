import './App.css';
import Carousel from './components/Carousel';
import ResponsiveAppBar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <ResponsiveAppBar />
      <Carousel />
    </div>
  );
}

export default App;
