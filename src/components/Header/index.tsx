import React from "react";
import { HeaderContainer, StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <nav>
          <ul>
            <li>PT</li>
            <li>EN</li>
          </ul>
        </nav>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
