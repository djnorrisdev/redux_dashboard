import React from 'react';
import styled, {ThemeProvider} from 'styled-components/macro';

const CardBox = styled.div`
width: ${props => props.theme.width};
min-height: ${props => props.theme.height};
box-shadow: ${props => props.theme.shadow};
background-color: ${props => props.theme.bg};
border-radius: ${props => props.theme.radius};
padding: ${props => props.theme.padding};
`


CardBox.defaultProps = {
  theme: {
    width: "43%",
    height: "100%",
    shadow: "0 4px 8px 0 rgba(17,17,17,0.1)",
    bg: "#fefefe",
    radius: "10px",
    padding: "2%"
  }
}
const Card = props => {
  return (
    <CardBox>
      {props.children}
    </CardBox>
  )
}
export default Card;