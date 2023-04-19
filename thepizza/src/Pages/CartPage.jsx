import React, { useEffect, useState } from "react";
import "./cartpage.css";
import delivery from "../assets/gif/delivery.gif";
import CartList from "../components/CartList"
import { useNavigate } from "react-router-dom";

  const CartPage = () => {
     const [data, setData] = useState([]);
     const [total, setTotal] = useState(0);

     console.log(data)

  const navigate = useNavigate();

  useEffect(() => {
    if(data.length  === 0) {
      setTotal(0)
    }
  },[data])

  // getting data from local storage
  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem("cart"));
    setData(getdata);
  }, []);

  // set data in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(data));
  }, [data]);

  // increment items in cart
  const increment = (item) => {
      const x = data?.map((items) => items.id === item.id ? 
      {...items, quantity: items.quantity+1}
      : items)
      console.log(x, "x")
       setData(x);
    // }
  };

  // Decrement items in cart
  const decrement = (item) => {
    const newCart = [...data];
    const itemId = newCart.findIndex((items) => items.id === item.id);
    newCart[itemId].quantity -= 1;
    setData(newCart);
  };

  // clear cart list or local storage
  const onClear = () => {
    localStorage.clear();
    setData([]);
    setTotal(0);
  };

  // total Price in cart
  useEffect(() => {
    const totalPrice = data.reduce((rs, item) => rs + item.price * item.quantity,0);
     console.log(totalPrice,"total ")
    if (totalPrice) {
      setTotal(totalPrice);
    }
  }, [data]);

  // removing item in cart
  const removeItem = (item) => {
    const newCart = [...data];
    const itemId = newCart.findIndex((items) => items.id === item.id);
    newCart.splice(itemId, 1);
    setData(newCart);
  };

  return (
    <>
      <div className="cart_container">
        <h1>Hurry Up !</h1>
        <div className="mid_container d-flex flex-column  align-items-center justify-content-center">
          {data
            ? data.map((item) => {
                return (
                  <CartList
                    key={item.id}
                    data={item}
                    increment={() => increment(item)}
                    decrement={() => decrement(item)}
                    removeItem={() => removeItem(item)} />);
              })
            : ""}
        </div>

        <div
          style={{
            marginTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3>Total: Rs.{total}</h3>

          <div>
            <button className="m-2 btn btn-primary" onClick={onClear}>
              Submit
            </button>
            <button
              className="m-2 btn btn-danger"
              onClick={() => navigate("/")}
            >
              cancel
            </button>
          </div>
        </div>

        <div className="bg mt-5">
          <img src={delivery} className="gif" alt="Diivery boy" />
        </div>
      </div>
    </>
  );
};

export default CartPage;