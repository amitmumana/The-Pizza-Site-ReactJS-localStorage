import React from "react";
// import pizza from "../assets/img/pizza.jpg";
import close from "../assets/icons/close.png";
import "./cartlist.css";

function CartList({ increment, decrement, data, removeItem }) {

 console.log(data.quantity)

  return (
    <>
      <div className="d-flex align-items-center root_container">
        <div className="img_cart">
          <img
            className="img_cart"
            src={data.image}
            alt="img"
            height={75}
            width={75}
          />
        </div>

        <div className="ms-3 cart_text mb-2">
          <h4>{data.name}</h4>
          <h6>Rs.{data.price}</h6>

          <div className="counter d-flex align-items-center">
            <div
              // className="cart_btn d-flex align-items-center justify-content-center ms-1 me-1"
              >
              <button className="cart_btn btn btn-light ms-1 me-1"
                       onClick={decrement}
                       disabled={data.quantity === 1 ? true : false}>
              -
              </button>
            </div>
            <div
              className={
                data.quantity === 0
                  ? "badge bg-secondry count"
                  : "badge bg-primary count"
              }
            >
              {data.quantity}
            </div>
         
              <button  className="cart_btn btn btn-light  ms-1 me-1"
              disabled={data.quantity >= 10 ? true : false}
              onClick={increment} >
              +
            </button>

            <div className="ms-4">
              <img onClick={removeItem} src={close} height={25} width={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
