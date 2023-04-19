import React from "react";
import "./bottomcontainer.css";
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/instagram.png"
import twitter from "../assets/icons/twitter.png"

const BottomContainer = () => {
  return (
    
    <>
 <div className="pt-5 d-flex flex-wrap justify-content-center " id="Bottom_Container">
       <div className="menu text-start  text-sm-center">
       <ul>
        <li><h4>Menu</h4></li>
          <li><a href="#">Veg Pizza</a></li> 
          <li><a href="#">Side Orders</a></li>
          <li><a href="#">Pasta</a></li>
          <li><a href="#">Beverages</a></li>      
          <li><a href="#">Pizza Mania</a></li>
          <li><a href="#">Burger Pizza</a></li>
          <li><a href="#">Pizza Crusts</a></li>
          <li><a href="#">Farm House pizza</a></li>
          <li><a href="#">Cheese Corn Pizza</a></li>
          <li><a href="#">Veg Margherita Pizza</a></li>
          <li><a href="#">Garlic Bread</a></li>
          <li><a href="#">Extra Cheese Pizza</a></li>
       </ul>
     </div> 

     <div className="menu text-start">
       <ul>
             <li><h3>Pizza Restaurants</h3></li>
         <li><a href="#">Restaurants Near Me</a></li>
         <li><a href="#">Pizza Near Me</a></li>
         <li><a href="#">Food Near Me</a></li>
         <li><a href="#">Food Delivery</a></li>
         <li><a href="#">Order Food Online</a></li>
       </ul>
     </div>

    <div className="menu text-start ">
       <ul>
            <li><h3>About</h3></li>
           <li><a href="#">Gift Card</a></li>
           <li><a href="#">Card Balance Enquiry</a></li>
           <li><a href="#">FAQ</a></li>
           <li><a href="#">Virtual Pizza Party</a></li>
           <li><a href="#">e-Gift Vouchers</a></li>
       </ul>
    </div>

    <div className="menu text-center">
       <h3>SOCIAL MEDIA</h3>
       <ul className="social">
        <li><a href="#"><img src={facebook}/></a></li>
        <li><a href="#"><img src={instagram}/></a></li>
        <li><a href="#"><img src={twitter}/></a></li>
      </ul>
    </div>

    </div>
      
     {/* <div className="text-center" style={{backgroundColor:"#d4edda"}}>
      <p >All Rights Reserved. Copyright © Jubilant Ltd.</p>
     </div>  */}
   </>
  );
};

export default BottomContainer;
