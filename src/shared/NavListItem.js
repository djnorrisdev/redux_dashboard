import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { NavLink } from "react-router-dom";
import { FiBarChart2 } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi'
// import { IoIosBarcode } from 'react-icons/io';
import { FaTachometerAlt } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 100%;
  margin-top: 30%;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`

const InnerWrapper = styled.div`
  margin-top: 0;
`

const InnerDiv = styled.div`
  display: flex;
  color: #f1f1f1;
  padding-left: 1em;
  padding-bottom: 5px;
  }
`
const NavIcon = styled.div`
  display: flex;
  align-items: end;
  margin: 15px 10px 0;
  font-size: 25px;
  height: 23px;
`
const NavText = styled.div`
margin: 24px 0 15px 6px;
text-decoration: none;
`

class NavListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      icons: [<FiMail />, <FaTachometerAlt />, <FiUsers />, <FiSettings />],
      names: ['Inbox', 'Devices', 'Customers', 'Settings'],
      highlighted: '',
      val: null
    }
  }

  render() {
    return (
      <Wrapper>
        <StyledNavLink to="/home" activeStyle={{borderLeft:"3px solid #dbbc5e", background:"#2c3e50"}}>
          <InnerWrapper>
            <InnerDiv>
              <NavIcon><FiBarChart2 /></NavIcon><NavText>Home</NavText>
            </InnerDiv>
          </InnerWrapper>
        </StyledNavLink>
        <StyledNavLink to="/mail" activeStyle={{borderLeft:"3px solid #dbbc5e", background:"#2c3e50"}}>
          <InnerWrapper>
            <InnerDiv>
              <NavIcon><FiMail /></NavIcon><NavText>Inbox</NavText>
            </InnerDiv>
          </InnerWrapper>
        </StyledNavLink>
        <StyledNavLink to="/devices" activeStyle={{borderLeft:"3px solid #dbbc5e", background:"#2c3e50"}}>
          <InnerWrapper>
            <InnerDiv>
              <NavIcon><FaTachometerAlt /></NavIcon><NavText>Devices</NavText>
            </InnerDiv>
          </InnerWrapper>
        </StyledNavLink>
        <StyledNavLink to="/customers" activeStyle={{borderLeft:"3px solid #dbbc5e", background:"#2c3e50"}}>
          <InnerWrapper>
            <InnerDiv>
              <NavIcon><FiBarChart2 /></NavIcon><NavText>Customers</NavText>
            </InnerDiv>
          </InnerWrapper>
        </StyledNavLink>
        <StyledNavLink to="/settings" activeStyle={{borderLeft:"3px solid #dbbc5e", background:"#2c3e50"}}>
          <InnerWrapper>
            <InnerDiv>
              <NavIcon><FiBarChart2 /></NavIcon><NavText>Settings</NavText>
            </InnerDiv>
          </InnerWrapper>
        </StyledNavLink>
      </Wrapper>
    )
  }
}
export default NavListItem;