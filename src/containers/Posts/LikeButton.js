import React from 'react';
import styled from 'styled-components';


const ButtonWrapper = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #AEBD38;
  box-shadow: 0px 0px 3px #222;
  transition: all .2s ease-out;

  &:hover {
    transform: translateY(-.1rem);
  }
  > i {
    color: #FFF;
  }
`;
const LikeButton = (props) => (
  <ButtonWrapper> 
    <i className={`fa fa-lg ${props.iconType}`}  onClick={props.onClick} aria-hidden="true"></i>
  </ButtonWrapper>
);

export default LikeButton;