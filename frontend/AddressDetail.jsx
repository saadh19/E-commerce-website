import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './cartcontext';
import { useNavigate } from 'react-router-dom';
import './index.css'
const AddressDetail = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [values, setValues] = useState({
    userId:"",
    full_name: "",
    phone_number: "",
    address: ""
  });

  const handleChange = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const orderData = {
        userId:values.userId,
        full_name: values.full_name,
        phone_number: values.phone_number,
        address: values.address,
        cartItems,
        grandTotal
      };

      const res = await axios.post("http://localhost:5000/address", orderData);
      console.log(res.data);
      alert("Order placed successfully 💕");
      setCartItems([]);
      navigate('/order');
    } catch (err) {
      console.error(err);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className='address-container'>
      <h4>Address Details</h4>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label><strong>userId</strong></label><br />
          <input
            type="tel"
            name="userId"
            placeholder="Enter user id"
            value={values.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label><strong>Full Name</strong></label><br />
          <input
            type="text"
            name="full_name"
            placeholder="Enter full name"
            value={values.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label><strong>Phone Number</strong></label><br />
          <input
            type="tel"
            name="phone_number"
            placeholder="Enter phone number"
            value={values.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label><strong>Address</strong></label><br />
          <textarea
            name="address"
            placeholder="Enter full address"
            rows="4"
            value={values.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default AddressDetail;
