import React, { Component } from "react";
import AdminProfile from "./Auth/AdminProfile";
import AdminLogin from "./Auth/AdminLogin"
 
 
class Admin extends Component {
 
    state = {
        user: null,
        jwt:null
     }
    callback(user, jwt) {
        this.setState({ user: user.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }
 
    render() {

        const loggedIn = this.state.user || localStorage.getItem("jwt");

        return (
            <div>
                {!loggedIn 
                    
                    ?
 
                (<AdminLogin userCredential={this.callback.bind(this)}/>)

                    :

                (<AdminProfile userData={this.state.user} />)}
            </div>
        )
    }
}
 
export default Admin;