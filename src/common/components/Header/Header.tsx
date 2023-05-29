import React from "react";
import styled from "@emotion/styled";
import { StyledHeader, Hamburger } from "./HeaderStyle";
import { HamburgerURL } from "../../type/type";

function Header() {
  return (
    <StyledHeader>
      <Hamburger src={HamburgerURL.Img} />
    </StyledHeader>
  );
}
export default Header;