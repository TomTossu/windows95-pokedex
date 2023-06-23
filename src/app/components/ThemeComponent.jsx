'use client'
import React from 'react';
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components'
import original from 'react95/dist/themes/original';
import Navbar from './Navbar';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('react95/dist/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('react95/dist/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
  }
`;

const CenterBackground = styled.div`
background: ${({ theme }) => theme.desktopBackground};
display: flex;
justify-content:center;
`;

const Container = styled.div`
padding-top: 4rem;
padding-bottom: 4rem;
`;

const ThemeComponent = ({ children }) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <CenterBackground>
        <Navbar />
        <Container>
          {children}
        </Container>
      </CenterBackground>
    </ThemeProvider>
  </div>
);

export default ThemeComponent;