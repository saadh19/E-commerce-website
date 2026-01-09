import React ,{ useContext }from 'react'
import {products} from './productData'
import banner from './assets/Banner.jpeg'
import { Link } from 'react-router-dom';
import { CartContext } from './cartcontext';
const ProductCart = () => {
  const {addToCart}=useContext(CartContext)
  const handleAddToCart=(item)=>{
    addToCart(item)
    alert(`${item.name} Added to cart`)
  }
  return (
    <div className="product-container">
      <h1>Tshirts</h1>
      <div className="banner-container">
      <img src={banner} alt="banner" className="banner-img" />
    </div>
      <div className="product-list">
        {products.map( (item)=>(
            <div key={item.id} className="product-box" >
                
                <Link to={`/products/${item.id}`}>
                  <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.name}/>
                </Link>
                
                <h3>{item.name}</h3>
                
                <div className="product-footer">
                  <p>${item.price}</p>
                  <button onClick={()=>handleAddToCart(item)}>Add To Cart</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCart
