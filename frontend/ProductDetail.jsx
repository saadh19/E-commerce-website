import React, { useState, useEffect, useContext }  from "react";
import { useParams } from "react-router-dom";
import { products } from "./productData";
import { CartContext } from "./cartcontext";
import axios from "axios";
import { Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/reviews?productId=${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [id]);

    const handleAddReview = async () => {
    if (!name || !reviewText) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/reviews",
        {
          productId: parseInt(id),
          name,
          text: reviewText
        }
      );

      setReviews([res.data, ...reviews]);
      setName("");
      setReviewText("");
      alert("Review added successfully ⭐");
    } catch (err) {
      console.error(err);
      alert("Failed to add review");
    }
  };

  if (!product) return <h2>Product not found</h2>;
  const images = Array.isArray(product.image)
   ? product.image
   : [product.image];

  return (
    <div className="detail-container">
      
      {/*<div className="detail-img">
        <img src={product.image} alt={product.name} />
      </div>*/}

      <div className="image-container">
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows
            >
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${product.name}-${index}`}
                  className="detail-img"
                />
              </div>
            ))}
          </Slider>
      </div>


      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="price">Price: ${product.price}</p>
        <p>{product.description}</p>
        <div className="btn-group">
        <Link to="/products"><button className="add-btn">Back</button></Link>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
        </div>

        
      </div>

       <div className="reviews-list">
            {reviews.length === 0 && <p>No reviews yet.</p>}
            {reviews.map((rev) => (
              <div key={rev.id} className="review-item">
                <strong>{rev.name}</strong>
                <p>{rev.text}</p>
              </div>
            ))}
        </div>

         <div className="reviews-section">

            <h2>Add Review</h2>
            <div className="add-review">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <button onClick={handleAddReview}>Submit Review</button>
            </div>
          </div>
    </div>
  );
};

export default ProductDetail;
