import React, { useEffect, useState } from "react";
import dummyData from "../utils/dummyData"
import Card from "../components/Card"
import ShowCase from "../components/ShowCase";
import MiddleContainer from "../components/MiddleContainer"
import Pagination from "../components/Pagination"


function HomePage() {

     const pageSize = 10;

     const [data, setData] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [search, setSearch] = useState("");
     const [cart, setCart] = useState([]);

     useEffect(() => {
       setData(dummyData);
     }, []);

     const handlePageChange = (page) => {
       setCurrentPage(page);
     };

     // Getting Item from local storage
      useEffect(() => {
        let getItem = JSON.parse(localStorage.getItem("cart")) || [];
        if (getItem) {
      setCart(getItem);
      }
     }, []);

    // set data in local Storgae
     useEffect(() => {
       localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

    // sorting By rating
      const PopulerPressed = () => {
        let sorted = data.sort((a, b) => b.rating - a.rating);
      setData(sorted);
    };

    // add items in cart
     const onCartPressed = (item) => {
      const itemInCart = cart.find((items) => items.id === item.id);
       if (itemInCart) {
        alert("Item Already in Cart");
       } else {
       setCart(() => [...cart, { ...item, quantity: 1 }]);
     }
    };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <ShowCase/>
        <MiddleContainer
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => PopulerPressed()}
        />
        <div className="d-flex justify-content-center flex-wrap" id="items">
          {console.log(data, "amit")}
          {data
            // .filter((item) => item.name.toLowerCase().includes(search))
            //    .slice(currentPage * 10 - 10, currentPage * 10)
            .map((item, index) => {
              return (
                <Card
                  itemData={item}
                  onClick={() => onCartPressed(item)}
                  key={index}
                />
              );
            })}
        </div>
        {!search ? (
          <div>
            <Pagination
              pageSize={pageSize}
              itemCount={data.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              href={"#items"}/>
           </div>
         ) : null}
       </div>
     </>
    );
  }

export default HomePage;





