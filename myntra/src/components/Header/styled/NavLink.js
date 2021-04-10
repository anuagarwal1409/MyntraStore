import React, { Component } from "react";
import styled from "styled-components";

const navLinkComp = ({ className, children }) => (
  <a className={className}>{children}</a>
);
const NavLink = styled(navLinkComp)`
  padding: 25px 17px 28px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #282c3f;
  border-bottom: none;
  -webkit-transition: left 0.2s ease-out, width 0.2s ease-out;
  transition: left 0.2s ease-out, width 0.2s ease-out;
  font-weight: 500;
  
  text-transform: uppercase;
  :hover{
    border-bottom-color: #fb56c1,
    border-bottom-width: 4px,
    border-bottom-style: solid,

  };
`;

export default NavLink;
