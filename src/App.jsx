import styled from "styled-components";
import GlobalStyles from "styled-components";
import Btn from "./ui/Btn";
import Input from "./ui/Input";
import Header from "./ui/Header";
import Row from "./ui/Row";

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
        <Row type="horizontal">
          <Header type="h1">Zimmer Man</Header>
          <Header type="h2">You take care the Guests</Header>
          <Header type="h2">We take care the Rest</Header>
          <div>
            <Header type="h3">Check IN & Out</Header>
            <Btn onClick={() => alert("Check In")}>Check-In</Btn> &nbsp;
            <Btn onClick={() => alert("Check Out")}>Check-Out</Btn>
          </div>
        </Row>
        <Row type="vertical">
          <Header type="h2">Form</Header>
          <form>
            <Input type="number" placeholder="Enter Room Number" />
            <Input type="text" placeholder="Number Of Guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
