import React from "react";
import LineChart from "../../shared/LineChart/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Wrapper, Container } from "./App.styles";
import productsMock from "../../mocks/products.json";

export default function App() {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#004D61"];

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={<ShoppingList products={} title="produtos disponiveis" />}
          middle={<ShoppingList products={} title="Sua lista de compras" />}
          right={
            <div>
              estatisticas{" "}
              <LineChart color={colors[0]} title="saudavel" percentage={80} />
              <LineChart
                color={colors[1]}
                title="nao tao saudavel"
                percentage={20}
              />
              <LineChart color={colors[2]} title="limpeza" percentage={35} />
              <LineChart color={colors[3]} title="outros" percentage={15} />
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}
