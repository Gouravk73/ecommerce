import { Button } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/AboutPage';
import Store from './components/StorePage';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route  path={"/" }element={<Home/>} />
    <Route  path={"/store" }element={<Store/>} />
    <Route  path={"/about" }element={<About/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
