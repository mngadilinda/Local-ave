import Header from './components/Header'
import Hero from './components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Checkout from './components/Checkout'
import Cart from './components/Cart'
import Footer from './components/Footer';
import Product from './components/Product';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
