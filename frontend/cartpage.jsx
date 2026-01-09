import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import { Link } from 'react-router-dom';
import './index.css';

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemoveItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const increaseQty = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    setCartItems(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCartItems(newCart);
    }
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">My Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                
                <div className="cart-item-info">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div>
                    <h5 className="cart-item-name">{item.name}</h5>
                    <p className="cart-item-price">Price: ₹{item.price}</p>

                    <div className="qty-box">
                      <button className="btn-secondary" onClick={() => decreaseQty(index)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="btn-secondary" onClick={() => increaseQty(index)}>+</button>
                    </div>

                    <p className="cart-item-total">Total: ₹{item.price * item.quantity}</p>
                  </div>
                </div>

                <button className="btn-danger" onClick={() => handleRemoveItem(index)}>Delete</button>
              </li>
            ))}
          </ul>

          <div className="cart-total-section">
            <h4>Grand Total: ₹{grandTotal}</h4>
            <Link to="/address" className="btn-primary">Place Order</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
