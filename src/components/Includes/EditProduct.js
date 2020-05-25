import React, { Component } from "react";
import axios from "axios";

class EditProducts extends Component {
  state = {
    products: [],
    chosenProduct: [],
    status: null,
    image: "",
  };

  async componentDidMount() {
    axios.get("http://localhost:1337/products").then((res) => {
      this.setState({ products: res.data });
    });
  }
//Öppna vald produkt
  onClickChosenProduct(e) {
    let chosenProductId = e.target.getAttribute("data-key");
    localStorage.setItem("id", chosenProductId);
  
    
    axios
      .get("http://localhost:1337/products/" + chosenProductId)
      .then((res) => {
        this.setState({ chosenProduct: res.data });
      });
  }
//Gå tillbaka till välj produkt
  onClickAbort() {
    this.setState({ chosenProduct: [] });
  }
// Deleta produkt från databasen
  onClickDelete(e) {
    const chosenProductId = e.target.getAttribute("data-key");
    axios({
      method: "delete",
      url: `http://localhost:1337/products/${chosenProductId}`,
    })
      .then((response) => {
        console.log("Product deleted");
        console.log(response);
        console.log(response.status);
        this.setState({ chosenProduct: [] });
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }
//Edit produkt
  async onSubmitToApi(e) {
    e.preventDefault();
    let productId = localStorage.getItem("id")
    
    const res = await axios.put(
      `http://localhost:1337/products/${productId}`,
      {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
      }
    );
    console.log(res)
  } 
  

  render() {
    return (
      <div>
        {/* Välj Products */}
        {Object.keys(this.state.chosenProduct).length === 0 && (
          <div className={"edit_products__cards"}>
            {this.state.products.map((product) => (
              <div className={"edit_product__card"} key={product.id}>
                <div className={"edit_product__card"}>
                  <h3 className={"edit_product__card-name"}>{product.title}</h3>
                  <p className={"edit_product__card-price"}>{product.price}kr</p>
                  <button
                    className={"edit_product__card-btn"}
                    onClick={this.onClickChosenProduct.bind(this)}
                    data-key={product.id}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {Object.keys(this.state.chosenProduct).length > 0 && (
          <div className={"edit_form-wrapper"}>
            <form onSubmit={this.onSubmitToApi.bind(this)} className={"form"}>
              <h3 className={"title"}>Ändra produkt</h3>
              <img
                className={"edit_product__card-img"}
                src={
                  "http://localhost:1337" + this.state.chosenProduct.image.url
                }
                alt={"bild"}
              />
              <input
                type="hidden"
                name="id"
                value={this.state.chosenProduct.id}
                id={this.state.chosenProduct.id}
              />
              <input
                type="text"
                name="title"
                placeholder={"Enter new title"}
                className={"input"}
              />
              <textarea
                rows="5"
                type="text"
                name="description"
                placeholder={"Enter new description"}
                className={"input"}
              />
              <input
                type="number"
                name="price"
                placeholder={"Enter new price"}
                className={"input"}
              />
              <button className={"form-btn"}>Spara ändringar</button>
            </form>
            <button onClick={this.onClickAbort.bind(this)}> Tillbaka </button>
            <button
              onClick={this.onClickDelete.bind(this)}
              data-key={this.state.chosenProduct.id}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        )}
        ;
      </div>
    );
  }
}

export default EditProducts;
