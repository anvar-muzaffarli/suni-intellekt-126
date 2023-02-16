import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// komponentler buraya gelecek
import Navbar from './components/Navbar'
import Footer from './components/Footer';
// PAGES QOVLUGUNDAKI KOMPONENTLER START
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// PAGES QOVLUGUNDAKI KOMPONENTLER END


import AOS from 'aos';

function App() {

  {/* USEEFFECT NE IF DE NE DE FOR DA VERILMEZ! */}
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
    <BrowserRouter>
    <div className="wrapper">
   
   
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/haqqimizda' element={<About />} />
      <Route path='*' element={<NotFound />}  />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/elaqe' element={<Contact/>} />
    </Routes>
    

   
    </div>
    <Footer />

    </BrowserRouter>

    </>
   
  );
}

export default App;
