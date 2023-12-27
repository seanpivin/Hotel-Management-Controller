import styled from "styled-components";
import GlobalStyles from "styled-components";
import Btn from "./ui/Btn";
import Input from "./ui/Input";
import Header from "./ui/Header";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header>Zimmer Man</Header>
        <H2>You take care the Guests</H2>
        <H2>We take care the Rest</H2>
        <ButtonContainer>
          <Btn onClick={() => alert("Check In")}>Check-In</Btn> &nbsp;
          <Btn onClick={() => alert("Check Out")}>Check-Out</Btn>
        </ButtonContainer>
        <Input type="number" placeholder="Enter Room Number" />
      </StyledApp>
    </>
  );
}

export default App;
