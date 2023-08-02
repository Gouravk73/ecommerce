import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/AboutPage';
import Store from './components/Store';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartProvider from './components/store/CartProvider';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import { LoginProvider } from './components/store/LoginContext';
import LoginContext from './components/store/LoginContext';
import { useContext } from 'react';
function App() {
  const loginCtx = useContext(LoginContext);
     console.log( 'app',loginCtx.token)

   return (
      <LoginProvider>
    <CartProvider>

    <BrowserRouter>
    <Header/>
    <Routes>
    <Route  path={"/" }element={<Home/>} />
    {loginCtx.isLoggedIn&&<Route path='/store' 
     element={<Store/>} />}
     <Route  path={"/about" }element={<About/>} />
    <Route path={"/cart" } element={<Cart/>} />
    <Route path={"/contact" } element={<Contact />} />
    <Route path={"/login" } element={<Login />} />
    <Route path={"/store/:producttitle" } element={<ProductDetails />} />
    <Route path={'*'} element={<h1>Access Denied</h1>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>

    </LoginProvider>
  );
}

export default App;
