import React from "react";
import Checkbox from "../../shared/Checkbox/Checkbox";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import { Wrapper, Container } from "./App.styles";

export default function App() {
  const [lettuce, setLettuce] = React.useState();

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <div>
              produtos disponiveis:
              <Checkbox
                title="Alface"
                onClick={() => setLettuce(!lettuce)}
                value={lettuce}
              />
            </div>
          }
          middle={<div>sua lista de compras</div>}
          right={<div>estatisticas</div>}
        />
      </Container>
    </Wrapper>
  );
}
