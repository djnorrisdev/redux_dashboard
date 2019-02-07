import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Card from '../shared/Card';
import DemoSummary from './DemoSummary';
import TotalUseChart from './TotalUseChart';
import WeatherCard from './weatherCard/WeatherCard';

const Wrapper = styled.div`
  margin: 20px;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const TitleWrapper = styled.div`
  padding: 2% 0;
  display: flex;
  justify-content: center;
  font-size: 25px;
  text-align: center;
`;
const SmallCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(17,17,17,0.1);
  background: #fefefe;
  border-radius: 10px;
  padding: 2%;
  height: 350px;
`;
const LargeCard = styled.div`
  width: 90.5%;
  height: 80%;
  box-shadow: 0 4px 8px 0 rgba(17,17,17,0.1);
  background: #fefefe;
  border-radius: 10px;
  margin-top: 5%;
  padding: 2%;
`;

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Wrapper>
        <InnerWrapper>
          <Card>
            <WeatherCard />
          </Card>
          <Card>
            <TitleWrapper>
              Weekly Demographics Summary
            </TitleWrapper>
            <DemoSummary />
          </Card>
        </InnerWrapper>
        <InnerWrapper>
          <LargeCard>
            <TitleWrapper>
              Total Use
            </TitleWrapper>
            <TotalUseChart title="Total Use" legendPosition="bottom" />
          </LargeCard>
        </InnerWrapper>
      </Wrapper>
    );
  }
}
export default Home;
