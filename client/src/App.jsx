import Home from './components/pages/home';
import './App.css'
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
