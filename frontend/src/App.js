
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
