import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 5rem;
`;

const App = () => (
  <Wrapper>
    <Title>Reddit Clone</Title>
  </Wrapper>
);

export default App;
