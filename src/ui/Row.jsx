import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(p) =>
    p.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  ${(p) =>
    p.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
