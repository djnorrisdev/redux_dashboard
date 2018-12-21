import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import styled from 'styled-components/macro'
import SearchBar from './components/SearchBar';

const Wrapper = styled.div`
  display: flex;
  background-color: #F4F4F4;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <Body>
          <SearchBar />
        </Body>
      </Wrapper>
    );
  }
}

export default App;
