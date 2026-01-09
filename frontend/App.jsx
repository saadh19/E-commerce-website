import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './home';
import ProductCart from './productCart';
import CartPage from './cartpage';
import ReturnPolicy from './Returnpoliciespage';
import Contactus from './Contactuspage';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './cartcontext';
import ProductDetail from './ProductDetail';
import AddressDetail from './AddressDetail';
import MyProfile from './MyProfile';
import MyOrders from './MyOrders'
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductCart />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/address" element={<AddressDetail/>}/>
            <Route path="/profile" element={<MyProfile/>}/>
            <Route path="/order" element={<MyOrders/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
