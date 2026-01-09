import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const userId = localStorage.getItem("userId");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!userId) return;
    axios.get(`http://localhost:5000/orders/${userId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.log("Error fetching orders", err));
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: "#911515" }}>My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-muted">No orders found.</p>
      ) : (
        <div className="row">
          {orders.map(order => (
            <div key={order.id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={order.product_image} 
                      className="img-fluid h-100" 
                      style={{ objectFit: "cover" }} 
                      alt="product" 
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{order.product_title}</h5>
                      <p className="card-text mb-1"><strong>Qty:</strong> {order.quantity}</p>
                      <p className="card-text mb-1"><strong>Total:</strong> ₹{order.total_price}</p>
                      <p className="card-text mb-1"><strong>Grand Total:</strong> ₹{order.grand_total}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
