import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
 
 
class UserPage extends Component {
 
    state = {
        user: null,
        
     }
    callback(user) {
        this.setState({ user: user.email })
        
        localStorage.setItem("user", this.state.user)
    }
 
    render() {

        const loggedIn = this.state.user || localStorage.getItem("user");

        return (
            <div>
                {!loggedIn 
                    
                    ?
 
                (<UserLogin userCredential={this.callback.bind(this)}/>)

                    :

                (<UserProfile userData={this.state.user} />)}
            </div>
        )
    }
}
 
export default UserPage;