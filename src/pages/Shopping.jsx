import React from 'react'
import Product from '../components/Product'
import "./Shopping.scss"
// import Product from '../components/Product'
// import logo from "/img/Logo-Rikkei.png"
// import samsung from "../assets/img/samsung.png"
// import pad from "../assets/img/ipad.png"
// import iphone from "../assets/img/iphone.png"
// import macbook from "../assets/img/macbook.png"

const Shopping = () => {
  return (
    <div className='shopping'>
      <div className="logo"><img src="https://rikkei.edu.vn/wp-content/uploads/2022/04/Logo-Rikkei.png" alt="logo" /></div>
      <div className="title">PROJECT - SHOPPING CART</div>
      
      <div className="container">
        <div className="list-product">
            <div className="list-product-title">List Products</div>
            <div className="list-product-product">
                <Product/>
            </div>
        </div>

        <div className="cart">
        <div className="cart-product-title">Cart</div>
        </div>
      </div>

    </div>
  )
}

export default Shopping
