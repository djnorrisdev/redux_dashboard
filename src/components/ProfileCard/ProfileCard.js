import React, { Component } from 'react';
import styled from 'styled-components/macro';
import ProfileForm from './ProfileForm';
import AvatarOptions from './AvatarOptions';

const LargeCard = styled.div`
  width: 90.5%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(17,17,17,0.1);
  background: #fefefe;
  border-radius: 10px;
  margin-top: 5%;
  padding: 5rem;
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: row;
  // flex: 2 1 auto;
  justify-content: space-between;
`;

class ProfileCard extends Component {
  render () {
    return (
      <LargeCard>
        <div style={{fontSize:'1.9rem', marginBottom:'2rem'}}>
          Edit Profile
        </div>
        <InnerCard>
          <div style={{ width:'60%'}}>
            <ProfileForm />
          </div>
          <div style={{ width:'40%'}}>
            <AvatarOptions />
          </div>
        </InnerCard>
      </LargeCard>
    )
  }
}
export default ProfileCard;
