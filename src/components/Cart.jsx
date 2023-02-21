import React from 'react';
import "./Cart.scss";

const Cart = ({ data }) => {
  console.log(data);
  return (
    <>
      {
        data.length === 0 ? <tr> <td colSpan={2} style={{"color":"red", "fontWeight":500, "margin": "20px auto"}}>Your cart is empty!</td></tr>: data.map((e, index) => 
                (<tr key={index}>
                  <td className='c-1'>{index + 1}</td>
                  <td className='c-2'>{e.title}</td>
                  <td className='c-3'>{e.price} USD</td>
                  <td className='c-3'>
                  {e.qty}
                  </td>
                  <td className='c-3'>{e.price * e.qty} USD</td>
                  <td className='c-4'>
                    <button>Update</button>
                    <button>Delete</button>
                  </td>
                </tr>))
      }
    </>
  )
}

export default Cart
