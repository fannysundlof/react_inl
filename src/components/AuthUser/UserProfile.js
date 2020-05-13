import React, {Component} from "react";
import firebase from "../Firebase/FirebaseConfig";


class UserProfile extends Component{

    logout(){
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }

    render(){
        return(
            <div className={"margin"}>
            <h2>Välkommen </h2>
            
            {console.log(this.props.userData)}
                 <a href="/userpage" onClick={this.logout.bind(this)}> Logga ut</a>
            
            
            </div>
        )
    }
}


export default UserProfile;