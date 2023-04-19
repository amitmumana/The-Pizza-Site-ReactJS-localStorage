import React from "react";
import "./middlecontainer.css";
import pizza from "../assets/img/pizza.jpg";

const MiddleContainer = ({ value, onChange, onClick,onPriceClick }) => {
  return (
    <>
      <div className="p-5" id="Container">

        <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-1 col-md-4 col-sm-6 img_div ">
               <div onClick={onClick} className="img_one">
                 <h1>Populer</h1>
                 <div className="overlay"></div>
               </div>
            </div>

            <div className="col-lg-4 col-sm-1 col-md-4 col-sm-6 img_div">
               <div onClick={onPriceClick} className="img_one">
               <h1>Populer</h1>
               <div className="overlay"></div>
               </div>
            </div>

           <div className="col-lg-4 col-sm-1  col-md-4 col-sm-6 img_div"> 
               <div className="img_one">
                 <h1>Populer</h1>
                 <div className="overlay"></div>
               </div>
           </div>
        </div>

        <form className="d-flex m-4" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="find your favorite"
            aria-label="Search"
            value={value}
            onChange={onChange}
          />
        </form>
      </div>
    </>
  );
};

export default MiddleContainer;
