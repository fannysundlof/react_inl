
import React, {Component} from "react";



class Logout extends Component{

    state = {
        user: null
     }

    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
        }


    render(){

        return(

            <li> 
            <button className={"logout-btn"} onClick={this.logOut.bind(this)} >Logga ut</button>
            </li> 
        )
    }
}


export default Logout;