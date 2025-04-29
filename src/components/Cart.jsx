import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const itemCards = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();
  const handleClear = ()=>{
    dispatch(clearCart());
  }
  return (
    <div className='m-4 w-6/12 m-auto '>
      <h1 className='text-pretty font-semibold text-center'>CartItems</h1>
      <button className='mx-auto p-2 bg-green-300 border border-red-500 rounded-lg' onClick={handleClear}>Clear</button>
      <ItemList items={itemCards}/>
    </div>
  )
}

export default Cart