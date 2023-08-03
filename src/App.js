import LoginContext from './components/store/LoginContext';
import { useContext } from 'react';import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import AddDataForm from './components/AdaaDataForm';

function App() {
  const loginCtx = useContext(LoginContext);
    //  console.log( 'token in app context',loginCtx.token)
     console.log( 'token in app context',loginCtx.email)

   return (
    <CartProvider>

    <BrowserRouter>
    <Header/>
    <Routes>
    <Route  path={"/" }element={<Home/>} />
    <Route path={'/form'} element={<AddDataForm/>} />
    {<Route path='/store' 
     element={loginCtx.isLoggedIn?<Store/>:<Login/>} />}
     <Route  path={"/about" }element={<About/>} />
    <Route path={"/cart" } element={<Cart/>} />
    <Route path={"/contact" } element={<Contact />} />
    <Route path={"/login" } element={!loginCtx.isLoggedIn?<Login />:<Home/>} />
    <Route path={"/store/:producttitle" } element={<ProductDetails />} />
    <Route path={'*'} element={<h1>Page Not Found </h1>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
