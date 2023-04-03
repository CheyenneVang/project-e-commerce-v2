import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;