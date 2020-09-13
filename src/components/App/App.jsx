import React from "react";
import Checkbox from "../../shared/Checkbox/Checkbox";
import LineChart from "../../shared/LineChart/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import { Wrapper, Container } from "./App.styles";

export default function App() {
  const [lettuce, setLettuce] = React.useState();
  const [healthy, setHealthy] = React.useState(20);

  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#004D61"];

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
