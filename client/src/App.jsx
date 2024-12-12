import Cart from "./component/cart";
import WishlistedItems from "./component/wishlistedItems";
import About from "./component/about";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './component/home'
import Profile from "./profile";

function App() {


  return (
    <>
      <Routes>
        <Route path="/wishList" element={<WishlistedItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
