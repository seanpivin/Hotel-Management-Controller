import styled from "styled-components";

const Input = styled.input`
  font-size: 20px;
  font-weight: 600;
  color: #111;
  background-color: var(--color-brand-900 #312e81);
  text-align: center;
  padding: 1.2rem 1.5rem;
  border: 2px solid #111;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-0);
    color: #fff;
  }
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1 auto;
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;

export default Input;
