import React, { useState } from 'react';
import "./Product.scss";

const Product = () => {

    const [qty, setQty] = useState(1);

  return (
    <div className='product'>

      <div className="img"><img src="https://cdn.tgdd.vn/Products/Images/44/239552/Slider/vi-vn-apple-macbook-air-m1-2020-z124000de-8.jpg" alt="iphone" /></div>
      
      <div className="des">
        <div className="des-title">macbook</div>
        <div className="title-dest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
      
      <div className="action">
        <div className="price">1200$</div>
        <div className="qty">
            <button className="minus">-</button>
            <input type="text" value={qty} />
            <button className="add">+</button>
        </div>
        <button className='add-to-card'>Add to card</button>
      </div>

    </div>
  )
}

export default Product
