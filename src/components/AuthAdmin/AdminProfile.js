import React, {Component} from "react";
import AdminForm from "../Includes/AdminForm";
import EditProducts from "../Includes/EditProduct";


class AdminProfile extends Component{

    render(){
        return(
            <div className={"margin"}>
            <h2>Välkommen admin</h2>
            
            <AdminForm />
            <EditProducts />
            
            </div>
        )
    }
}


export default AdminProfile;