import React from 'react'
import './index'
import p1 from './assets/2.jpeg'
import p2 from './assets/saadh.jpeg'
import p3 from './assets/saadh2.jpeg'
import p4 from './assets/saariya.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="header"> 
      
         <div className="description">
            <h3>Welcome To Our Website</h3>
            <h3>Style your Soul</h3>

            <p>
                At MyProject.com, we bring you a stylish and modern collection of clothing designed for every age, occasion, and personality. Our catalogue includes trendy outfits, premium-quality fabrics, and comfortable everyday wear that fits your lifestyle perfectly.
                We focus on delivering top-quality products, ensuring each item goes through strict quality checks for stitching, material durability, and accurate sizing. Whether you're shopping for casual wear, office outfits, traditional styles, or fashion accessories, we guarantee the best in both looks and comfort.
            </p>  
            <p> 
                Our services are fast, simple, and customer-friendly. We offer quick delivery, secure payments, hassle-free returns, and dedicated support for all your shopping needs. Every product is carefully packed and shipped with priority to maintain freshness and top condition.
                We believe in transparent pricing with no hidden charges, giving you great value for money. Our aim is to provide a smooth shopping experience where style meets trust, comfort meets quality, and customers always come first.
                Shop with us and experience a new level of fashion, quality, and service — all in one place.

            </p>
        </div>
        <div className="men-fashion">
            <h3>Men's Fashion</h3>

            <div className="men-images">
                <img src={p1} alt="Men Style 1" />
                <img src={p2} alt="Men Style 2" />
                <img src={p3} alt="Men Style 3" />
                <img src={p4} alt="Men Style 4" />
            </div>
        </div>
        <div className="footer">
            <div className="footer-section">
            <p className="footer-title">
                © {new Date().getFullYear()} MyProject.com – All Rights Reserved
            </p>
            </div>
            <ul className="footer-links">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/return">Return Policy</Link></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="#">X</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Home

