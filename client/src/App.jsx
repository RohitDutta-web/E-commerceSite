import Home from './components/pages/home';
import './App.css'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import About from './components/pages/about';
import User from './components/pages/user';
import AllProducts from './components/pages/products';
import ProductInfo from './components/pages/productInfo';
import Cart from './components/pages/cart';
import WishList from './components/pages/wishList';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/:id" element={<ProductInfo />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishList' element={ <WishList/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
