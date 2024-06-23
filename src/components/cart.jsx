import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal, remove, increase, decrease, clearCart } from '../redux/feature/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalCount } = useSelector((state) => state.cart);

  useEffect(() => {
    // dispatch(getCartItems());
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <ul>
        {console.log(items)}
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(increase(item.id))}>Increase</button>
              <button onClick={() => dispatch(decrease(item.id))}>Decrease</button>
              <button onClick={() => dispatch(remove(item.id))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total Amount: {totalAmount}</h2>
      <h2>Total Items: {totalCount}</h2>
    </div>
  );
};

export default Cart;
