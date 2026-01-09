import React, { useContext }  from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './index.css'
import { CartContext } from './cartcontext';
const Layout = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="nav">
      <div className="banner">
        <p>🔥 Black Friday Sale! Huge Discounts Available! 🔥  🔥 Black Friday Sale! Huge Discounts Available! 🔥  🔥 Black Friday Sale! Huge Discounts Available! 🔥</p>
      </div>
            <div className="topbar">
              <h1>MyProject.com</h1>
                <nav className="menu">
                    <Link to="/home"><button>Home</button></Link>
                    <Link to="/products"><button>Products</button></Link>
                   
                    <Link to="/profile"><button>Profile</button></Link>
                    <Link to="/cart"><button>Cart{totalItems > 0 && `(${totalItems})`}</button></Link>
                    <Link to="/order"><button>Orders</button></Link>
                    <Link to="/"><button>Logout</button></Link>
                </nav>
             
            </div>
      <Outlet />
    </div>
  );
};

export default Layout;