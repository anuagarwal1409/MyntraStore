import HeaderStyled from "./styled/HeaderStyle";
import StyledNV from "./styled/NavLink";
import BrandLogo from "./styled/BrandLogo";
import SearchBar from "./styled/SearchBar";
import PictureLink from "./styled/PictureLink";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import React from "react";

function Header() {
  return (
    <div >
      <HeaderStyled>
        <div className="left-items">
          <FontAwesomeIcon className="bar_icon" icon="bars" />
          <BrandLogo className="brand_logo" />

          <StyledNV className="nav_link">MEN</StyledNV>
          <StyledNV >
            <NavLink to="/home" className="nav_link" style={{color:'black'}}>WOMEN</NavLink>
          </StyledNV>
          <StyledNV className="nav_link">KIDS</StyledNV>
          <StyledNV className="nav_link">HOME&LIVING</StyledNV>
          <StyledNV className="nav_link">OFFERS</StyledNV>
          <StyledNV >
            <NavLink to="/store" className="nav_link" style={{color:'black'}}>STORE</NavLink>
          </StyledNV>
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
