import styled, { css } from "styled-components";

const Header = styled.div`
  display: flex;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin: 0;
  padding: 0;
  border-radius: 7px;
  ${(p) =>
    p.type === "h1" &&
    css`
      font-size: 60px;
    `}

  ${(p) =>
    p.type === "h2" &&
    css`
      font-size: 40px;
    `}
  ${(p) =>
    p.type === "h3" &&
    css`
      font-size: 20px;
    `}
`;

export default Header;
