import React from 'react';
import { Link } from 'react-router-dom';
import NavListItem from '../../shared/NavListItem';
import { Wrapper, Image } from './sidebarStyles';
// Height:62px, width:100px for snap logo;

const Sidebar = () => (
  <Wrapper>
    <Link to="/home">
      <Image src="/images/logo.png" alt="logo" />
		</Link>
		<NavListItem />
	</Wrapper>
);
export default Sidebar;
