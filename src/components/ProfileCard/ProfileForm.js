import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components/macro';
import countryOptions from './countryOptions';

const NameWrapper = styled.label`
  font-size: 1.3rem;
`;

class ProfileForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'enter'
    }
  }
  handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    })
  }

  render () {
    // console.log(countryOptions);
    return (
      <Form>
        <NameWrapper>
          Name
        </NameWrapper>
        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='First name' />
          <Form.Input fluid width='6' placeholder='MI' />
          <Form.Input fluid placeholder='Last Name' />
        </Form.Group>
        <NameWrapper>
          Address
        </NameWrapper>
        <Form.Group widths='equal'>
        <Form.Input fluid width='10' placeholder='Street' />
        <Form.Input fluid width='4' placeholder='Apt#' />
        <Form.Select fluid width='8' options={countryOptions} placeholder='Select Country' />
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Input fluid placeholder='City' />
        <Form.Input fluid  placeholder='State' />
        <Form.Input fluid width='8' placeholder='Zipcode' />
        </Form.Group>
        <NameWrapper>
          Address
        </NameWrapper>
        <Form.Group widths='equal'>
          <Form.Input fluid placeholder='Email Address' />
        </Form.Group>
        <NameWrapper>
          Bio
        </NameWrapper>
        <Form.Group widths='equal'>
        <Form.TextArea placeholder='Tell us more about you...' />
        </Form.Group>
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}
export default ProfileForm;
