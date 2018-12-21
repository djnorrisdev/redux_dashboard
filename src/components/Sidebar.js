import React, { Component } from "react";
import styled from "styled-components/macro";
import NavListItem from "../shared/NavListItem";

const Wrapper = styled.div`
	width: 220px;
	height: 100vh;
	background: #43425d;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #f1f1f1;
`;
const Image = styled.img`
	width: 91px;
	height: 70px;
	margin: 10px 0;
`;
// Height:62px, width:100px for snap logo;

const Sidebar = props => {
	return (
		<Wrapper>
			<Image src="/images/logo.png" alt="logo" />
			<NavListItem />
		</Wrapper>
	);
};
export default Sidebar;
