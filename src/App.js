import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components/macro';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import MailLanding from './components/Mail/MailLanding';
import Settings from './components/Settings';

const Wrapper = styled.div`
  display: flex;
  background-color: #F4F4F4;
  max-width: 1600px;
  margin: 0 auto;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f4f4f4;
`;

const App = () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <RightContainer>
        <SearchBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/mail" component={MailLanding} />
          {/* <Route path="/mail" component={MailLanding} /> */}
          {/* <Route path="/mail" component={MailLanding} /> */}
          <Route path="/settings" component={Settings} />
          <Redirect from="/" to="/home" />
        </Switch>
      </RightContainer>
    </Wrapper>
  </Router>
);

export default App;
