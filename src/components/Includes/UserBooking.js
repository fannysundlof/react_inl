import React, { Component } from "react";
import axios from "axios";
import firebase from "../Firebase/FirebaseConfig";

class UserBooking extends Component {
  state = {
    displaybtn: true,
    products: [],
    status: null,
    image: "",
  };

  onClickGetBookings() {
    const db = firebase.firestore();
    const docRef = db
      .collection("booking")
      .doc(firebase.auth().currentUser.uid.toString());

    docRef.get().then((booking) => {
      if (booking.exists) {
        var bookingCard = document.getElementById("booking_card");
        var btn = document.getElementById("btn");

        bookingCard.querySelector(".title").innerHTML = booking.data().name;
        bookingCard.querySelector(".price").innerHTML = booking.data().price;
        bookingCard.querySelector(".description").innerHTML = booking.data().description;
        bookingCard.querySelector(".id").innerHTML = booking.data().id;

        let productId = booking.data().id;
        localStorage.setItem("id", productId);

        console.log("Det finns:", booking.data());
        this.setState({ displaybtn: false });
        btn.remove();
      } else {
        console.log("error");
      }
    });
  }

  onClickViewBooking(e) {
    const productID = localStorage.getItem("id");

    axios.get("http://localhost:1337/products/" + productID).then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className={"edit_products__cards"}>
          {this.state.displaybtn && (
            <button
              onClick={this.onClickGetBookings.bind(this)}
              id={"btn"}
              className={"contact_btn"}
            >
              Visa bokingar
            </button>
          )}
          <div id={"booking_card"}>
            <h3 className={"title"}> </h3>
            <p className={"id"} hidden></p>
            <p className={"description"}> </p>
            <p className={"price"}> </p>
            {!this.state.displaybtn && (
              <button
                className={"edit_product__card-btn"}
                onClick={this.onClickViewBooking.bind(this)}
              >
                Mer info
              </button>
            )}
          </div>
        </div>

        {Object.keys(this.state.products).length > 0 && (
          <div className={"edit_products__cards"}>
            <div className={"edit_product__card"}>
              <img
                className={"product__card-img"}
                src={"http://localhost:1337" + this.state.products.image.url}
                alt={"bild"}
              />
              <h3 className={"edit_product__card-name"}>
                {this.state.products.title}
              </h3>

              <p className={"edit_product__card-price"}>
                {this.state.products.price}kr
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserBooking;
