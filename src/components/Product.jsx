import React, { useState } from 'react'

const Product = () => {

    const [qty, setQty] = useState(1);

  return (
    <div>
      <div className="img"><img src="../../public/img/iphone.png" alt="iphone" /></div>
      <div className="des">
        <div className="des-title">Iphone</div>
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
