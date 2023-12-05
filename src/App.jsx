import styled from "styled-components";
import GlobalStyles from "styled-components";

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin: 0;
  padding: 0;
  border-radius: 7px;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 650;
  color: #000;
  text-align: center;
  margin: 0;
  padding: 1% 0;
`;

const Btn = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: #111;
  background-color: #fff;
  text-align: center;
  padding: 1.2rem 1.5rem;
  border: 2px solid #111;
  border-radius: 5px;
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
  width: 25%;
`;

const Input = styled.input`
  font-size: 20px;
  font-weight: 600;
  color: #111;
  background-color: #fff;
  text-align: center;
  padding: 1.2rem 1.5rem;
  border: 2px solid #111;
  border-radius: 5px;
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
  width: 25%;
`;

const StyledApp = styled.div`
  background-color: #fff;
  color: #222;
  padding: 50px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Zimmer Man</H1>
        <H2>You take care the Guests</H2>
        <H2>We take care the Rest</H2>
        <Btn onClick={() => alert("Check In")}>Check-In</Btn> &nbsp;
        <Btn onClick={() => alert("Check Out")}>Check-Out</Btn>
        <Input type="number" placeholder="Enter Room Number" />
      </StyledApp>
    </>
  );
}

export default App;
