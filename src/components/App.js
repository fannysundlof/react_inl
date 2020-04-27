import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/_main.scss";

const App = (props)=> {
    return (

        <div>
            <Header />
            
                <h1 className={"margin"}>Hem</h1>
            
            <Footer />
        
        </div>

    )



}

export default App;