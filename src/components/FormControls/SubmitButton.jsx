import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: #598234;
  border: 1px solid #598234;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin: 1rem 0.5rem;
  padding: 1rem;
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    border-color: #fff;
    cursor: pointer;
  }
`;

const SubmitButton = ({ text, disabled }) => (
  <Button disabled={disabled} type="submit">
    {text}
  </Button>
);

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
