import React, {Component} from "react";
import firebase from "../Firebase/FirebaseConfig";
import UserBooking from "../Includes/UserBooking";
import UserMessages from "../Includes/UserMessages";

class UserProfile extends Component{


    state = {
        user: null || localStorage.getItem("user"),
        displayName: ""
        
    }

    deleteAccount(){
        var user = firebase.auth().currentUser;
    
        if(user){
            user.delete().then(function() {
        // User deleted.
            localStorage.clear();
            window.location.reload(false);
            console.log("User deleted");
        }).catch(function(error) {
        // An error happened.
        console.log("Error");
        });
    
        }
    }

    render(){


        return(
            <div className={"margin"} >
            <h2>Välkommen </h2>
            <p > Hej  {this.props.userData}</p>
            <button onClick={this.deleteAccount.bind(this)} className={"contact_btn"}>Radera konto</button>
           
                 <UserBooking />
                 <UserMessages />
                
            </div>
        )
    }
}


export default UserProfile;