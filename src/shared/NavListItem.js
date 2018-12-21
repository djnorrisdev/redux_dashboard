import React, { Component } from 'react';
import styled from 'styled-components/macro';
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

const InnerWrapper = styled.div`
  margin-top: 0;
`

const InnerDiv = styled.div`
  display: flex;
  color: #f1f1f1;
  padding-left: 1em;
  padding-bottom: 5px;
  border-left: ${props => props.key === props.val ? '2px solid #dbbc5e' : '0'};
  background-color: ${props => props.active ? '#2c3e50' : 'transparent'};
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
`

class NavListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      icons: [<FiBarChart2 />, <FiMail />, <FaTachometerAlt />, <FiUsers />, <FiSettings />],
      names: ['Home', 'Inbox', 'Devices', 'Customers', 'Settings'],
      highlighted: '',
      val: null
    }
  }

  handleHighlight = (i,e) => {
    console.log(this.state.val);
    this.setState({
      highlighted: !this.state.highlighted,
      val: i
    })
  }

  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          {this.state.names.map((item, i) => {
            return (
              <InnerDiv key={i} val={i} active={this.state.highlighted} onClick={()=>this.handleHighlight(i)}>
                <NavIcon>{this.state.icons[i]}</NavIcon><NavText>{item}</NavText>
              </InnerDiv>
            )
          })}
        </InnerWrapper>
      </Wrapper>
    )
  }
}
export default NavListItem;