import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import firebase from "../Firebase/FirebaseConfig";

class UserPage extends Component {
  state = {
    user: "" || localStorage.getItem("user"),
    displayName: "",
  };

  callback(user) {
    localStorage.setItem("user", this.state.user);
    this.setState({ user: user.email });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user.email,
          displayName: user.displayName,
        });
      } else {
        this.setState({ user: localStorage.getItem("user") });
      }
    });
  }

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");

    return (
      <div>
        {!loggedIn ? (
          <UserLogin userCredential={this.callback.bind(this)}
          />
        ) : (
          <UserProfile userData={this.state.displayName || this.state.user} />
        )}
      </div>
    );
  }
}

export default UserPage;
