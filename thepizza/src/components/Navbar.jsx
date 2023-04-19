import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import PizzaIcon from "../assets/icons/PizzaIcon.svg"
import cart from "../assets/icons/cart.png"

const Navbar = () => {
  
  const navigate = useNavigate()

  const CartPressed = () => {
    navigate('/cart')
  }

    return(
      <div id="header-navbar" >
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center"> 
          <img 
           style={{height:50, width:50,}}  
               src={PizzaIcon}
                  alt={"nothing is here"} 
                     className=" ms-3 me-2 img-fluid"/> 
             <h4 className='mt-2'>Cheese Overload</h4>           
           </a>
             
          {/* <button className="navbar-toggler" type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex flex-row align-items-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className='text-decoration-none active nav-link' to="/" >Home</Link>
              </li>
              <li className="nav-item">
              {/* <Link className='text-decoration-none nav-link' to={"/about"} >About</Link> */}
               <img style={{cursor:'pointer'}} onClick={() => CartPressed()} src={cart} height={30} width={30}/> 
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <div>
              </div>
            </form> */}
          </div>
        </div>
      </nav>
      </div>

    )
}

export default Navbar