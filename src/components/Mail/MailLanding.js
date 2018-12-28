import React, {Component} from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import Card from '../../shared/Card';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
`
const large = {
    width: "800px",
    height: "600px",
    shadow: "0 4px 8px 0 rgba(17,17,17,0.1)",
    bg: "#fefefe",
    radius: "10px"
}

class MailLanding extends Component {
  render () {
    return (
      <Wrapper>
        <div>
        <ThemeProvider theme={large}>
          <Card />
        </ThemeProvider>
        </div>
      </Wrapper>
    )
  }
}
export default MailLanding;