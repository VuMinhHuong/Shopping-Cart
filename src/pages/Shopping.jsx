import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'
import Product from '../components/Product'
import "./Shopping.scss"

const Shopping = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/product')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='shopping'>
      <div className="logo"><img src="https://rikkei.edu.vn/wp-content/uploads/2022/04/Logo-Rikkei.png" alt="logo" /></div>
      <div className="title">PROJECT - SHOPPING CART</div>
      
      <div className="container">
        <div className="list-product">
            <div className="list-product-title">List Products</div>
            <div className="list-product-product">
              {products ? products.map(product => <Product data={product}/>) : "Loading..."}
            </div>
        </div>

        <div className="cart">
          <div className="cart-product-title">Cart</div>
          <div className="cart-products-table">
            <Cart/>
          </div>
          <div className="cart-products-priceTotal">
            There are 5 items in your cart with: 3000 USD
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shopping
