import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Header, Home, Contact, Pricing, Facilities, Footer } from './export/pages'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='/contact' element= { <Contact /> } />
        <Route path='/pricing' element= { <Pricing /> } />
        <Route path='/facilities' element= { <Facilities /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
