import React from 'react';
import styled from 'styled-components';

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

export default ErrorNotification;
