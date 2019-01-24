import styled, { keyframes } from 'styled-components/macro';

export const Wrapper = styled.div`
width: 220px;
height: 100vh;
position: sticky;
top: 0;
background: #43425d;
display: flex;
flex-direction: column;
align-items: center;
color: #f1f1f1;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
width: 91px;
height: 70px;
margin: 15px 0;
animation: ${rotate} 60s linear infinite;
`;
