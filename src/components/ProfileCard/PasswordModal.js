import React, { Component } from 'react';
import { Button, Header, Modal, Input, Form, Message } from 'semantic-ui-react';
import styled from 'styled-components/macro';

const NameWrapper = styled.label`
  font-size: 1.3rem;
`;

class PasswordModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      currentPassword: '',
      newPassword: '',
      currentPasswordError: false,
      newPasswordError: false,
      formError: false
    }
  }

  handleCancel = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleSubmit = (e) => {
    console.log(e.currentTarget)
    const { currentPassword, currentPasswordError, newPassword, newPasswordError } = this.state;
    e.preventDefault();


    if (currentPassword === '' || currentPassword.length < 8) {
      this.setState({
        currentPasswordError : true
      })
    } else {
      this.setState({
        currentPasswordError : false
      })
    }
    if (newPassword === '' || newPassword.length < 8) {
      this.setState({
        newPasswordError : true
      })
    } else {
      this.setState({
        newPasswordError : false
      })
    }
    if(currentPasswordError && newPasswordError ) {
      this.setState({
        formError: true
      })
    } else if (currentPasswordError || newPasswordError){
      this.setState({
        formError: true
      })
    } else {
      this.setState({
        formError: false
      })
    }
  }

  render() {
    const { currentPassword, newPassword, currentPasswordError, newPasswordError } = this.state;
    console.log('current: ' + this.state.currentPassword, 'new: ' + this.state.newPassword, 'error: ' + this.state.formError, 'curERR: ' + currentPasswordError, 'newERR: ' + newPasswordError)
    return (
      this.props.name === 'password' ?
        <React.Fragment>
          <Header icon='unlock alternate' content='Change Password' />
          <Modal.Content>
            <Form error={this.state.formError} onSubmit={this.handleSubmit}>
              <NameWrapper>
                Current Password
          </NameWrapper>
              <Form.Input
                fluid
                width='12'
                placeholder='Enter Current Password'
                type='password'
                value={currentPassword}
                onChange={(e) => this.setState({currentPassword: e.target.value})}
                error={currentPasswordError}
              />
              {currentPasswordError ? <Message
                  error
                  content='current password does not meet length requirements'
                /> : null}
              <NameWrapper>
                New Password
              </NameWrapper>
              <Form.Input
                fluid
                width='12'
                placeholder='Enter New Password'
                type='password'
                value={newPassword}
                onChange={(e) => this.setState({newPassword: e.target.value})}
                error={newPasswordError}
              />
              {newPasswordError ? <Message
                  error
                  content='new password does not meet length requirements'
                /> : null}
              <Form.Button
                color='green inverted'
                content='Submit'
                disabled={
                  !this.state.currentPassword
                  || !this.state.newPassword
                }
              />
            </Form>
          </Modal.Content>
        </React.Fragment>
        :
        <div>Hi</div>
    )
  }
}
export default PasswordModal;
