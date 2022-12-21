import styled from "styled-components";

export const StyledHeader = styled.header`
  color: #e2e3d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  padding: 1rem;
`;

export const HeaderContainer = styled.div`
  nav {
    ul {
      display: flex;
      gap: 5rem;
    }

    li {
      list-style: none;
      transition: transform 0.3s;

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
