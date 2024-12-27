import Home from './components/pages/home';
import './App.css'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import About from './components/pages/about';
import User from './components/pages/user';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
