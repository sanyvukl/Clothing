import React, { Fragment, useState, useContext } from "react"
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          {!currentUser ?
            (<Link className="nav-link" to="/auth">SIGN IN</Link>)
            : (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown  />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;