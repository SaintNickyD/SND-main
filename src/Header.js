import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { FaShoppingBasket } from "react-icons/fa";

function Header() {
return ( 
    <div className="header">
        <Link to ="/">
          <div className="header__option">Home Base
          </div>
        </Link>
        <Link to ="/store">
          <div className="header__option">$$$
          </div>
        </Link>
        <Link to ="/setups">
          <div className="header__option">Setups
          </div>
        </Link>
        <Link to ="/OnTop">
          <div className="header__option">OnTop Registry
          </div>
        </Link>
        <Link to ="/yourAccount">
          <div className="header__option">Your Account
          </div>
        </Link>
        <Link to ="/login">
          <div className="header__option">Hello Guest, Are you new?
          </div>
        </Link>
        <Link to ="/">
          <div className="header__option">Do This later
            <FaShoppingBasket />
          </div>
        </Link>

    </div>


    );
}

export default Header;