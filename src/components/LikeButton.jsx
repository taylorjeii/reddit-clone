import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.span`
  align-items: center;
  background-color: #aebd38;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #222;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  transition: all 0.2s ease-out;
  width: 50px;
  &:hover {
    transform: translateY(-0.1rem);
  }
  > i {
    color: #fff;
  }
`;

const LikeButton = props => (
  <ButtonWrapper onClick={props.onClick}>
    <i className={`fa fa-lg ${props.iconType}`} aria-hidden="true" />
  </ButtonWrapper>
);

LikeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconType: PropTypes.string.isRequired
};

export default LikeButton;
