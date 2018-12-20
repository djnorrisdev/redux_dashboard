import React, { Component } from 'react';
import styled from 'styled-components';
import { FiBarChart2 } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi'
import { IoIosBarcode } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 100%;
  margin-top: 30%;
`

const InnerWrapper = styled.div`
  margin-top: 0;
`

const InnerDiv = styled.div`
  display: flex;
  color: #f1f1f1;
  padding-left: 3em;
`
const NavIcon = styled.div`
  display: flex;
  align-items: end;
  margin: 20px 10px 0;
  font-size: 25px;
`
const NavText = styled.div`
  margin: 28px 0 15px 10px;
`

class NavListItem extends Component {
  state = {
    icons: [<FiBarChart2 />, <FiMail />, <IoIosBarcode />, <FiUsers />, <FiSettings />],
    names: ['Home', 'Inbox', 'Devices', 'Customers', 'Settings']
  }

  handleShow = () => {
    return this.state.names.map((item, i) => {
      return (
        <InnerDiv key={i}>
          <NavIcon>{this.state.icons[i]}</NavIcon><NavText>{item}</NavText>
        </InnerDiv>
      )
    })
  }

  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          {this.handleShow()}
        </InnerWrapper>
      </Wrapper>
    )
  }
}
export default NavListItem;