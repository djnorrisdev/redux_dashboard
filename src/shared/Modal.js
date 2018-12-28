import React, { Component } from "react";
import styled from 'styled-components/macro';
import { MdForum } from 'react-icons/md';
import { MdOpacity } from 'react-icons/md';

const ModalOuter = styled.div`
  display: none;
  position: fixed;
  right: 20px;
  top: 52px;
  width: 30%;
  background-color: #fefefe;
  z-index: 100;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(17,17,17,0.1);
  &.active {
    display: block;
  }
`
const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #4B77BE;
  padding: 20px 18px;
  border-radius: 6px 6px 0 0;
`
const NameBox = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img.attrs({
  src:'' 
})`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 0;
`

const AvBtn = styled.button`
  width: 88px;
  height: 33px;
  border-radius: 20px;
  font-size: 16px;
  color: #f1f1f1;
  background-color: #333333;
  border: none;
  cursor: pointer;
`

const ModalMiddle = styled.div`
  padding: 20px;
`
const MyNavList = styled.ul`
  margin-top: 15px;
  li {
    padding 5px 0;
  }
`
const ModalBottom = styled.div`
display: flex;
flex-direction: row;
width: 100%;
padding: 20px 0;
`
const ModalInboxBtn = styled.button`
  width: 50%;
  height: 6em;
`

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleCancel = () => {
  }

  handleLogout = (e) => {
    e.preventDefault();
    console.log('logged out')
    // Axios PUT
  }

  render() {
    return (
      <ModalOuter className={`${this.props.isActive}`}>
        <ModalTop>
          <NameBox>
          <Image src={'https://randomuser.me/api/portraits/women/8.jpg'} />
          <p style={{paddingLeft: '8px'}}>{this.props.userName}</p>
          </NameBox>
          <AvBtn onClick={this.handleLogout}>Logout</AvBtn>
        </ModalTop>
        <ModalMiddle>
          <span>MY ACCOUNT</span>
          <MyNavList>
            <li>Settings</li>
            <li>Messages</li>
            <li>Devices</li>
          </MyNavList>
        </ModalMiddle>
        <ModalBottom>
          <ModalInboxBtn><MdForum style={{width: '100%', fontSize:'24px'}}/>Contact Inbox</ModalInboxBtn>
          <ModalInboxBtn><MdOpacity style={{width: '100%', fontSize:'24px'}}/>Supplies Inbox</ModalInboxBtn>
        </ModalBottom>
      </ModalOuter>
    )
  }
}
export default Modal;