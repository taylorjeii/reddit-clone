import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: #fff;
  padding: 1rem;
  background: #ff0033;
  margin: 0;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const ErrorNotification = ({ error }) => (
  <ErrorWrapper>{error && <ErrorMessage>{error.message}</ErrorMessage>}</ErrorWrapper>
);

export default ErrorNotification;
