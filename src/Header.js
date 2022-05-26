import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="data:image/jpeg;base64,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"
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
