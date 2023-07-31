import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/AboutPage';
import Store from './components/Store';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartProvider from './components/store/CartProvider';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route  path={"/" }element={<Home/>} />
    <Route  path={"/store" }element={<Store/>} />
    <Route  path={"/about" }element={<About/>} />
    <Route path={"/cart" } element={<Cart/>} />
    <Route path={"/contact" } element={<Contact />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
