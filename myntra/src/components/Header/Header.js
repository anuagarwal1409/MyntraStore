import HeaderStyled from "./styled/HeaderStyle";
import NavLink from "./styled/NavLink";
import BrandLogo from "./styled/BrandLogo";
import SearchBar from "./styled/SearchBar";
import PictureLink from "./styled/PictureLink";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function Header() {
  return (
    <div className="header_wraper">
      <HeaderStyled>
        <div className="left-items">
          <FontAwesomeIcon className="bar_icon" icon="bars" />
          <BrandLogo className="brand_logo" />
          {/* <img
            src="https://images.indianexpress.com/2021/01/myntra.png"
            width="53"
            height="36"
          /> */}

          <NavLink className="nav_link">MEN</NavLink>
          <NavLink className="nav_link">WOMEN</NavLink>
          <NavLink className="nav_link">KIDS</NavLink>
          <NavLink className="nav_link">HOME&LIVING</NavLink>
          <NavLink className="nav_link">OFFERS</NavLink>
          <NavLink className="nav_link">STORE</NavLink>
        </div>
        <div className="right-items">
          <SearchBar className="search-bar" />
          <div className="profile-links">
            <PictureLink icon="user" link="Profile" />
            <PictureLink icon="bookmark" link="Wishlist" />
            <PictureLink icon="shopping-bag" link="Bag" />
          </div>
        </div>
      </HeaderStyled>
    </div>
  );
}

export default Header;