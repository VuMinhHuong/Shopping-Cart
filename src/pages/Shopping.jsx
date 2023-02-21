import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Cart from '../components/Cart'
import Product from '../components/Product'
import "./Shopping.scss"

const Shopping = () => {

  const [products, setProducts] = useState([])
  const [cartData, setCartData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/product')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(()=>{
    fetch('http://localhost:8000/cart')
    .then(res => res.json())
    .then(data => {
      setCartData(data)
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
              {products ? products.map(product => <Product data={product} />) : "Loading..."}
            </div>
        </div>

        <div className="cart">
          <div className="cart-product-title">Cart</div>
          <div className="cart-products-table">

            <div className='cart-comp'>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className='c-1'>No.</th>
                    <th className='c-2'>Name</th>
                    <th className='c-3'>Price</th>
                    <th className='c-3'>Quantity</th>
                    <th className='c-3'>Subtotal</th>
                    <th className='c-4'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <Cart data={cartData}/>
                </tbody>
              </Table>
            </div>

          </div>
          <div className="cart-products-priceTotal">
            There are {cartData.length} items in your cart with total price: {
              cartData.reduce((total, item)=>total+(item.price*item.qty),0)
           } USD
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shopping
