import React from 'react';
import AppContainer from '../AppContainer/AppContainer';
import AppHeader from '../AppHeader/AppHeader';
import { Wrapper, Container } from './App.styles';

export default function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer />
      </Container>
    </Wrapper>
  );
}
