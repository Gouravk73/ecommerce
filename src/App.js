import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutPage';
import Store from './components/StorePage';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartProvider from './components/store/CartProvider';
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

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
