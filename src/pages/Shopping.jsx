import React from 'react'
import "./Shopping.scss"
import Product from '../components/Product'
import logo from "../assets/img/Logo-Rikkei.png"
import samsung from "../assets/img/samsung.png"
import pad from "../assets/img/ipad.png"
import iphone from "../assets/img/iphone.png"
import macbook from "../assets/img/macbook.png"

const Shopping = () => {
    let data_product = [
        {
            id: 1,
            img: {samsung},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 1200
        }, 
        {
            id: 2,
            img: {pad},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 2200
        }, 
        {
            id: 3,
            img: {iphone},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 200
        }, 
        {
            id: 4,
            img: {macbook},
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 3500
        }, 
        
    ]
  return (
    <div className='shopping'>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="title">PROJECT - SHOPPING CART</div>
      
      <div className="list-product">
        <div className="list-product-title">List Products</div>
        <div className="list-product-product">
            {data_product.map((data, index) => {

            })}
        </div>
      </div>

      <div className="cart">Cart</div>

    </div>
  )
}

export default Shopping
