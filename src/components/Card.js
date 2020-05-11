import React from "react";


const Card = (props)=> {
    return (

        <div className={"products__cards"}>
            <div className={"product__card"}>
                <img
                className={"product__card-img"}
                src={props.image}
                alt={"hej"}
                />
                <h2 className={"product__card-name"}>{props.title}</h2>
                <div className={"product__card-desc"}>
                    <p className={"product__card-text"}>{props.description}</p>
                </div>
          <p className={"product__card-price"}>{props.price}</p>
          <button className={"product__card-btn"}>Köp</button>
        </div>
        </div>
        
        
    )

}

export default Card;