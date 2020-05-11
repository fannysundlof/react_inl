import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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