import React, { useState } from 'react';
import "./Product.scss";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({data}) => {

    const [qty, setQty] = useState(1);

    const minusClick = () => {
      qty === 0 ? setQty(0) : setQty(qty - 1)
    }

    const addClick = () => {
      setQty(qty + 1)
    }

    const addToCart = (e) => {
      if(qty === 0) {
        toast.error("Vui lòng nhập số lượng")
      } else {
        var data_to_cart = {
          id: Math.floor(Math.random()*1000),
          product_id: data.id,
          qty: qty,
          ...data,
        }
        fetch('http://localhost:8000/cart', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data_to_cart)
           })
          .then(res => {
            toast.success("Thêm vào giỏ hàng thành công!")
            setQty(1)
          })
          .catch(err => toast.error("Lỗi server"))
        }
      }
      

  return (
    <div className='product'>

      <div className="img"><img src={data.img} alt="iphone" /></div>
      
      <div className="des">
        <div className="des-title">{data.title}</div>
        <div className="title-dest">{data.desc}</div>
      </div>
      
      <div className="action">
        <div className="price">{data.price}$</div>
        <div className="qty">
            <button className="minus" onClick={minusClick}>-</button>
            <input type="text" value={qty} />
            <button className="add" onClick={addClick}>+</button>
        </div>
        <div className="btn">
          <button className = "add-to-card" onClick={addToCart}>Add to card</button>
          <ToastContainer/>
        </div>
      </div>

    </div>
  )
}

export default Product
