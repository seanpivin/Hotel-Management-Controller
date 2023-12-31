import styled, { css } from "styled-components";

export const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

export const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Btn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: #111;
  background-color: var(--color-brand-900 #312e81);
  text-align: center;
  padding: 1.2rem 1.5rem;
  border: 2px solid #111;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #111;
    color: #fff;
  }
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

export default Btn;
