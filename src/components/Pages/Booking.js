import React from "react"; 
import Form from "../Form";
import Footer from "./Footer";
import FirebaseTest from "../Firebase/FirebaseTest";

const Booking = () => {
    
    return(
        
        <div>
            <h1 className={"margin"}>Kundboking</h1>
            <Form />
            <FirebaseTest />
            <Footer />
        </div>
    )


}

export default Booking;