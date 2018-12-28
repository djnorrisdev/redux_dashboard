import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import ModalOuter from '../shared/Modal';

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
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
  font-size: 20px;
  color: #90929a;
  padding: 14px 0 14px 45px;
`

const MainSearchIcon = styled(FiSearch)`
position: absolute;
top: 6px;
left: 0px;
padding-left: 18px;
font-size: 38px;
color: #d6d6df;
`
const AvatarBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #90929a;
  .break {
    border-left: 2px solid #d6d6df;
    margin: 0 10px;
    height: 30px;
  }
`
const AvImage = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  margin-left: 10px;
`

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state= {
      userName: 'Jane Goodall',
      isActive: false
    }
  }

  handleOptions = () => {
    console.log('fired');
		this.setState({
			isActive: !this.state.isActive
		});
	};
  render() {
    let active = this.state.isActive ? "active" : "";
    return (
      <Wrapper>
        <MainSearchIcon/>
        <Input defaultValue="Search" type="text" />
        <AvatarBox onClick={this.handleOptions}>
          <FiBell />
          <div className="break"></div>
          <p style={{marginRight: '10px'}}>{this.state.userName}</p>
          <FiChevronDown />
          <ModalOuter isActive={active} userName={this.state.userName} />
          <AvImage src='https://randomuser.me/api/portraits/women/8.jpg' alt='user picture'/>
        </AvatarBox>
      </Wrapper>
    )
  }
} 
export default SearchBar;