import React, { Component } from 'react';
import styled from 'styled-components/macro';
import ProfileForm from './ProfileForm';

const LargeCard = styled.div`
  width: 90.5%;
  height: 75vh;
  box-shadow: 0 4px 8px 0 rgba(17,17,17,0.1);
  background: #fefefe;
  border-radius: 10px;
  margin-top: 5%;
  padding: 5rem;
`;

class ProfileCard extends Component {
  render () {
    return (
      <LargeCard>
        <div style={{fontSize:"1.9rem"}}>Edit Profile</div>
        {/* <ProfileForm /> */}
      </LargeCard>
    )
  }
}
export default ProfileCard;
