import styled from 'styled-components';
import React from 'react';

export const AppOuterWrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const AppInnerWrapper = styled.div`
  width: 80%;
`;

export const AppWrapper = ({ children }) => (
  <AppOuterWrapper>
    <AppInnerWrapper>{children}</AppInnerWrapper>
  </AppOuterWrapper>
);
