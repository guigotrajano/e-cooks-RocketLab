import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import App from './pages/App';
import Bag from './pages/Bag';
import Fim from './pages/Fim';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<App />} />
      <Route path="/product1" element={<Product1 />} />
      <Route path="/product2" element={<Product2 />} />
      <Route path="/product3" element={<Product3 />} />
      <Route path="/product4" element={<Product4 />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/fim" element={<Fim />} />
    </Routes>
  );
}

export default Router;