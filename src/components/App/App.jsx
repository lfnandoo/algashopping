import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { Wrapper, Container } from "./App.styles";

export default function App() {
  return (
    <Wrapper>
      <Container>
        <AppHeader />
      </Container>
    </Wrapper>
  );
}
