import React from "react"; 


const Card = () => {
    return(


        <section className={"products"}>
        <div className={"products__cards"}>
          <div className={"product__card"}>
            <img
            className={"product__card-img"}
              src={require("../img/interior-1.jpeg")}
              alt={"hej"}
            />
            <h2 className={"product__card-name"}>RUBRIK</h2>
            <div className={"product__card-desc"}>
              <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure!
              </p>
            </div>
            <p className={"product__card-price"}>10000kr</p>
            <button className={"product__card-btn"}>Köp</button>
          </div>
          <div className={"product__card"}>
            <img
              className={"product__card-img"}
              src={require("../img/interior-2.jpeg")}
              alt=""
            />
            <h2 className={"product__card-name"}>RUBRIK</h2>
            <div className={"product__card-desc"}>
              <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure!
              </p>
            </div>
            <p className={"product__card-price"}>12000kr</p>
            <button className={"product__card-btn"}>Köp</button>
          </div>
          <div className={"product__card"}>
            <img
              className={"product__card-img"}
              src={require("../img/interior-6.jpeg")}
              alt=""
            />
            <h2 className={"product__card-name"}>RUBRIK</h2>
            <div className={"product__card-desc"}>
              <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure!
              </p>
            </div>
            <p className={"product__card-price"}>20000kr</p>
            <button className={"product__card-btn"}>Köp</button>
          </div>
        <div className={"product__card"}>
            <img
              className={"product__card-img"}
              src={require("../img/interior-4.jpeg")}
              alt=""
            />
            <h2 className={"product__card-name"}>RUBRIK</h2>
            <div className={"product__card-desc"}>
              <p className={"product__card-text"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure!
              </p>
            </div>
            <p className={"product__card-price"}>20000kr</p>
            <button className={"product__card-btn"}>Köp</button>
          </div>
          
          </div>
      </section>

    )


}

export default Card;

