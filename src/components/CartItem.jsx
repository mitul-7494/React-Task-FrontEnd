import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../redux/feature/cartSlice";
import './CartItem.css'; // Import the CSS file

const CartItem = ({ id, thumbnail, title, price, quantity , dispatch}) => {
  // const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="row cart-item-row">
        <div className="left-item-cont">
          <div className="col-sm-2 cart-item-thumbnail">
            <img
              src={thumbnail}
              className="img-fluid cart-item-image"
              alt=""
            />
          </div>
          <div className="col-sm-2 cart-item-details">
            <h5>{title}</h5>
            <div className="col-sm-8 cart-item-quantity">
              <h5 className="cart-item-price">${price}</h5>
              <div
                className="fas fa-minus cart-item-chevron"
                onClick={() => dispatch(decrease(id))}
              ></div>
              <div className="cart-item-quantity-text">{quantity}</div>
              <div
                className="fas fa-plus cart-item-chevron"
                onClick={() => dispatch(increase(id))}
              ></div>
            </div>
          </div>
        </div>
        <div className="total-price">${ price*quantity }.00</div>
        
      </div>
    </div>
  );
};

export default CartItem;
