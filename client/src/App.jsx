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
import AdminEntry from './components/pages/adminEntry';
import RestirctedAnnouncepage from './components/pages/restirctedAnnouncepage';






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
          <Route path='/wishList' element={<WishList />} />
        <Route path='/adminEntry' element={<AdminEntry />} />
        <Route path='/restricted' element={<RestirctedAnnouncepage />} />
        </Routes>

      </BrowserRouter>
    
  )
}

export default App
