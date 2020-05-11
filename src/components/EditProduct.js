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
  componentDidUpdate() {
    if (Object.keys(this.state.chosenProduct).length > 0) {
      document.querySelector(
        'input[name="title"]'
      ).value = this.state.chosenProduct.title;
      document.querySelector(
        'textarea[name="description"]'
      ).value = this.state.chosenProduct.description;
      document.querySelector(
        'input[name="price"]'
      ).value = this.state.chosenProduct.price;
    }
  }

  eventChange(e) {
    this.setState({ image: e.target.files[0] });
  }

  onClickChosenProduct(e) {
    let chosenProductId = e.target.getAttribute("data-key");
    axios
      .get("http://localhost:1337/products/" + chosenProductId)
      .then((res) => {
        this.setState({ chosenProduct: res.data });
      });
  }

  onClickAbort() {
    this.setState({ chosenProduct: [] });
  }

  onClickDelete(e) {
    const chosenProductId = e.target.getAttribute("data-key");
    axios({
      method: "delete",
      url: `http://localhost:1337/products/${chosenProductId}`,
    })
      .then((response) => {
        console.log("Well done");
        console.log(response);
        console.log(response.status);
        // this.setState({ chosenProduct: [] });
      })
      .catch((error) => {
        console.log("An error occurred", error);
      });
  }

  onClickEnableUpload() {
    const fileInput = document.querySelector("#img__upload");
    fileInput.disabled = false;
  }

  async onSubmitToApi(e) {
    e.preventDefault();

    const fileInput = document.querySelector("#img__upload");

    const res = await axios.get("http://localhost:1337/products", {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      price: e.target.elements.price.value,
    });

    if (!fileInput.disabled) {
      // Upload image
      console.log("input isnt disabled");

      const formData = new FormData();
      formData.append("files", this.state.image);
      formData.append("ref", "product"); // Refererar till table
      formData.append("refId", res.data.id); // Hämtat post-id från vår post vi skapade.
      formData.append("field", "image"); // Refererar till column i vår table

      axios({
        method: "post",
        url: `http://localhost:1337/upload`,
        data: formData,
      })
        .then((response) => {
          // Handle success
          console.log("Picture uploaded to post, Well done");
          console.log(response);
          console.log(response.status);
          this.setState({ status: response.status });
          console.log("from state:", this.state.status);
        })
        .catch((error) => {
          console.log("An error occurred", error);
        });
    }

    axios({
      method: "put",
      url: `http://localhost:1337/products/${e.target.elements.id.value}`,
      data: {
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
      },
    })
      .then((response) => {
        // Handle success
        console.log("Post created, Well done");
        console.log(response);
        console.log(response.status);
        // this.setState({ status: response.status });
      })
      .catch((error) => {
        console.log("An error occurred", error);
        // console.log(data);
      });
  }

  render() {
    return (
      <div>
        {/* Välj Products */}
        {Object.keys(this.state.chosenProduct).length === 0 && (
          <div className={"products__cards"}>
            {this.state.products.map((product) => (
              <div className={"product__card"} key={product.id}>
                <div>
                  <h3 className={"product__card-name"}>{product.title}</h3>
                  <p className={"product__card-price"}>{product.price}kr</p>
                  <button
                    className={"product__card-btn"}
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
          <div className={"products__cards"}>
            <form onSubmit={this.onSubmitToApi.bind(this)} className={"form"}>
              <h4 className={"title"}>Ändra produkt</h4>
              <img
                className={"product__card-img"}
                src={
                  "http://localhost:1337" + this.state.chosenProduct.image.url
                }
                alt={"hej"}
              />
              <button onClick={this.onClickEnableUpload.bind(this)}>
                Ändra bild
              </button>
              <input
                id={"img__upload"}
                type="file"
                name="file"
                onChange={this.eventChange.bind(this)}
                disabled
                className={"input"}
              />
              <input
                type="hidden"
                name="id"
                value={this.state.chosenProduct.id}
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
              <button>Spara ändringar</button>
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
