import Home from './pages/Home';
import Company from './pages/Company';
import Product from './pages/Product';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
