import React from 'react';
import styled from 'styled-components/macro';
import ProfileCard from './ProfileCard/ProfileCard';

const Wrapper = styled.div`
  margin: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Settings = () => (
  <div>
    <Wrapper>
      <InnerWrapper>
        <ProfileCard />
      </InnerWrapper>
    </Wrapper>
  </div>
);
export default Settings;
