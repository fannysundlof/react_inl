import React from "react"; 
import {Link} from "react-router-dom";


const Footer = () => {
    return(

        <footer className={"footer"}>
            <ul className={"socialmedia"}>
                <li><i className={"fab fa-facebook-square fa-2x"}></i></li>
                <li><i className={"fab fa-twitter-square fa-2x"}></i></li>
                <li><i className={"fab fa-instagram fa-2x"}></i></li>
             </ul>
           
          <p className={"copyright"}>&copy; 2020</p>
    </footer>
        

    )


}

export default Footer;