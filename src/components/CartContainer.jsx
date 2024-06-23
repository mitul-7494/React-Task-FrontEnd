import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import api from "../utils/UserApi";
import { setCartItems, getCartTotal } from "../redux/feature/cartSlice";
import './CartContainer.css'; // Import the CSS file

const CartContainer = () => {
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if(items.length <= 0){try {
      api.get('items/cart').then((response) => {
        if(response){
          dispatch(setCartItems({
            data:response.data["cart"]
          }));
        }
      });
    } catch (err) {
      console.log('failed to get cart', err)
    }}
    dispatch(getCartTotal());
  },[items,dispatch]);

  if (items.length === 0) {
    return (
      <>
        <h3 className="fs-bold" style={{ marginTop: "20px" }}>
          Your Shopping <span className="shopping-icon"></span> is Empty
        </h3>
      </>
    );
  }
  return (
    <div style={{marginTop:'25px'}}>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} dispatch={dispatch}/>;
      })}
      <footer>
        <hr />
        <div style={{display:'flex',width:"100vw",justifyContent:'center'}}>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-between",
              // marginRight: "60px",
              width:"68vw"
            }}
          >
            Total <span>${totalAmount}.00</span>
          </h4>
        </div>

      </footer>
    </div>
  );
};

export default CartContainer;
