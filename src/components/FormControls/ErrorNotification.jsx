import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMessage = styled.p`
  background: #ff0033;
  color: #fff;
  margin: 0;
  padding: 1rem;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const ErrorNotification = ({ error }) => (
  <ErrorWrapper>{error && <ErrorMessage>{error.message}</ErrorMessage>}</ErrorWrapper>
);

ErrorNotification.propTypes = {
  error: PropTypes.object.isRequired
};

export default ErrorNotification;
