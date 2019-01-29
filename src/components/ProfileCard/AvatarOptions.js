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

const CenteredModal = styled(Modal)`
  &&& {
    .header, .content, .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    }
  }
`


class AvatarOptions extends Component {

  handleLogout = (e) => {
    e.stopPropagation();
    console.log('logged out')
  }

  render() {
    return (
      <Wrapper>
        <Avatar src={require('../../shared/img/21.jpg')} alt='user profile picture'>
        </Avatar>
        <div style={{marginTop:'1.5rem'}}>
          <MdBorderColor />
          <span style={{marginLeft:'0.5rem'}}>Edit Avatar</span>
        </div>
        <Modal 
          trigger={<AvBtn color='blue' content='Change Password'/>}
          basic
          size='tiny'
          content= {<PasswordModal name='password'/>}
          closeIcon
          />
        <CenteredModal
        trigger={<AvBtn color='red' content='Logout' />}
        basic
        size='mini'
        header='Logout'
        content='Would You Like to Log Out?'
        actions={[{ key: 'Cancel', content: 'Cancel', color:'red' }, {key: 'logout', content:'Logout', color:'green', onClickCapture:this.handleLogout}]}
      />
        {/* <Modal 
          trigger={<AvBtn color='red' content='Logout' />}
          basic
          size='small'
          >
          <PasswordModal name='logout'/>
        </Modal> */}
      </Wrapper>
    )
  }
}
export default AvatarOptions;
