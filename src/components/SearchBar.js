import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  background-color: #fdfdfd;
  box-shadow: 0 4px 8px 0 rgba(17,17,17,0.1);
}
`
const Input = styled.input`
  width: 60%;
  border: none;
  height: 46px;
  font-size: 20px;
  color: #90929a;
  padding-left: 45px;
`

const MainSearchIcon = styled(FiSearch)`
position: absolute;
top: 15px;
left: 0px;
padding-left: 18px;
font-size: 20px;
color: #d6d6df;
`
const AvatarBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #90929a;
  div {
    border-left: 2px solid #d6d6df;
    margin: 0 10px;
    height: 30px;
  }
  p {
    margin-right: 10px;
  }
  img {
  height: 38px;
  width: 38px;
  border-radius: 50%;
    margin-left: 10px;
  }
`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state= {
      userName: 'Jane Goodall'
    }
  }


  render() {
    return (
      <Wrapper>
        <MainSearchIcon/>
        <Input defaultValue="Search" type="text" />
        <AvatarBox>
          <FiBell />
          <div></div>
          <p>{this.state.userName}</p>
          <FiChevronDown />
          <img src='https://randomuser.me/api/portraits/women/8.jpg' alt='user picture'/>
        </AvatarBox>
      </Wrapper>
    )
  }
} 
export default SearchBar;