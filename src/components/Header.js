import React from "react"; 
import {Link} from "react-router-dom";

const Header = () => {
    return(
      <div>
    <header className={"header"}>
        <a href="#menu" className={"menu-toggle"}><span className={"fas fa-bars"}></span></a>
        <nav id="menu" className={"navmenu"}>
          <a href="#main-menu-toggle" className={"menu-close"}>
          <span id={"nav__close"} className={"fas fa-times"}></span></a>
          <ul className={"navmenu__ul"}>
            <li>
              <Link to={"/"} className={"navmenu__a"}>Hem</Link>
            </li>
            <li>
              <Link to={"/card"} className={"navmenu__a"}>Produkter</Link>
            </li>
            <li>
              <Link to={"/booking"} className={"navmenu__a"}>Boka</Link>
            </li>
            <li>
            <Link to={"/info"} className={"navmenu__a"}>Hitta hit</Link>
            </li>
          </ul>
        </nav>
        <a href={"#main-menu-toggel"} className={"backdrop"} hidden>x</a>
      </header>
      
      </div>
    )


}

export default Header;