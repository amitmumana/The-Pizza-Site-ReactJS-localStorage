import React from "react";
import "./card.css"

const Card = ({itemData,onClick}) => {
    return(
        <>
      <div className="card shadow m-4 " style={{ width: "18rem" }}>
        <div className="img_div">
        <img 
          src={itemData.image}
          alt="pizza-Pic"
          height={240}
          className=" card-img-top image_card"
        />
        </div>
        <div className="card-body">
          <h5 className="card-title title_text">{itemData.name}</h5>
           <div>
             <h4> Rs.{itemData.price}</h4>
             <h4>{itemData.rating}⭐</h4>
           </div>
          <p className="card-text" 
             style={{
                 WebkitBoxOrient:"vertical",
                 WebkitLineClamp:2,
                 display:"-webkit-box",
                 textOverflow:"ellipsis",
                 overflow:"hidden",
          }}>
            {itemData.discriptions}
          </p>
           <button className="btn btn-primary" onClick={onClick}>
              Cart +
           </button>
        </div>
      </div>
    </> 
    )
}

export default Card