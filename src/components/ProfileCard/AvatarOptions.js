import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { MdBorderColor } from 'react-icons/md';
// import { Button } from 'semantic-ui-react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PasswordModal from './PasswordModal';

const Wrapper = styled.div`
 width: 100%;
 margin: 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-top: 2.5rem;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
`;

const AvBtn = styled(Button)`
  &&& {
    margin-top: 1.5rem;
    :last-child {
      padding: .78571429em 3.9em .78571429em;
    }
  }
`;


const AvatarOptions = (props) =>  (
  <Wrapper>
    <Avatar src={require('../../shared/img/21.jpg')} alt='user profile picture'>
    </Avatar>
    <div style={{marginTop:'1.5rem'}}>
      <MdBorderColor />
      <span style={{marginLeft:'0.5rem'}}>Edit Avatar</span>
    </div>
    {/* <div style={{marginTop:'1.5rem'}}>
    </div> */}
    <Modal trigger={<AvBtn color='blue' content='Change Password'/>} basic size='small'>
    <PasswordModal />
    </Modal>
    {/* <AvBtn color='blue'onClick={handleModal}>
      Change Password
    </AvBtn> */}
    {/* <div style={{marginTop:'1.5rem'}}>
    </div> */}
    <AvBtn color='red'>
      Logout
    </AvBtn>
  </Wrapper>
)
export default AvatarOptions;
