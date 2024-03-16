
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
