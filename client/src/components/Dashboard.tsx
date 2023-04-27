import Home from '../pages/Home';
import Company from '../pages/Company';
import Product from '../pages/Product';
import { Routes, Route } from 'react-router-dom'

export default function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  )
}
