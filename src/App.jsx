import styled from "styled-components";
import GlobalStyles from "styled-components";
import Btn from "./ui/Button";
import Input from "./ui/Input";

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
