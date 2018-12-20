import React, { Component } from 'react';
import styled from 'styled-components';
import NavListItem from '../shared/NavListItem'

const Wrapper = styled.div`
  width: 220px;
  height: 100vh;
  background: #43425D;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f1f1f1;
`
const Image = styled.img`
  width: 100px;
  height: 62px;
  margin: 10px 0;
`

class Sidebar extends Component {
  state = {
    open: true
  }


  render() {
    return (
      <Wrapper>
        <Image src="/images/snappylogo.png" alt="logo" />
        <NavListItem />
      </Wrapper>
    )
  }
}
export default Sidebar;