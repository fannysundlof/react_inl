import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../style/_main.scss";

import UserPage from "../AuthUser/UserPage";



const App = (props)=> {
    return (

        <div>
            <Header />
            
                <h1 className={"margin"}>Hem</h1>
                <UserPage />
            <Footer />
        
        </div>

    )



}

export default App;