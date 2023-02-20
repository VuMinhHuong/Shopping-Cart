import React from 'react';
import "./Cart.scss";
import { Table } from 'react-bootstrap'

const Cart = () => {
  return (
    <div className='cart-comp'>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th className='c-1'>#</th>
          <th className='c-2'>Name</th>
          <th className='c-3'>Price</th>
          <th className='c-3'>Quantity</th>
          <th className='c-3'>Subtotal</th>
          <th className='c-4'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='c-1'>1</td>
          <td className='c-2'>Iphone 14 promax</td>
          <td className='c-3'>12 USD</td>
          <td className='c-3'>
            2
          </td>
          <td className='c-3'>24 USD</td>
          <td className='c-4'>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>

        <tr>
          <td className='c-1'>1</td>
          <td className='c-2'>Iphone 14 promax</td>
          <td className='c-3'>12 USD</td>
          <td className='c-3'>
            2
          </td>
          <td className='c-3'>24 USD</td>
          <td className='c-4'>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td className='c-1'>1</td>
          <td className='c-2'>Iphone 14 promax</td>
          <td className='c-3'>12 USD</td>
          <td className='c-3'>
            2
          </td>
          <td className='c-3'>24 USD</td>
          <td className='c-4'>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td className='c-1'>1</td>
          <td className='c-2'>Iphone 14 promax</td>
          <td className='c-3'>12 USD</td>
          <td className='c-3'>
            2
          </td>
          <td className='c-3'>24 USD</td>
          <td className='c-4'>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td className='c-1'>1</td>
          <td className='c-2'>Iphone 14 promax</td>
          <td className='c-3'>12 USD</td>
          <td className='c-3'>
            2
          </td>
          <td className='c-3'>24 USD</td>
          <td className='c-4'>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </tr>

      </tbody>
    </Table>

    </div>
  )
}

export default Cart
