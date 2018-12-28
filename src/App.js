import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import styled from 'styled-components/macro';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import MailLanding from './components/Mail/MailLanding';


const Wrapper = styled.div`
  display: flex;
  background-color: #F4F4F4;
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f4f4f4;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Sidebar />
          <RightContainer>
            <SearchBar />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/mail" component={MailLanding} />
            </Switch>
          </RightContainer>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
