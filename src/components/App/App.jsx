import React from "react";
import { useSelector, useDispatch } from "react-redux";

import LineChart from "../../shared/LineChart/LineChart";

import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";

import extractPercentage from "../../utils/extractPercentage";

import { Wrapper, Container } from "./App.styles";

import {
  selectAllProducts,
  selectSelectedProducts,
  selectSelectedProductsTotalPrice,
} from "../../store/Products/Products.selectors";
import { toggleProduct } from "../../store/Products/Products.actions";

export default function App() {
  const dispatch = useDispatch();
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#004D61"];

  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectSelectedProducts);
  const totalPrice = useSelector(selectSelectedProductsTotalPrice);

  function handleToggle(id) {
    dispatch(toggleProduct(id));
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="produtos disponiveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              title="Sua lista de compras"
              displayOnlySelected
              onToggle={handleToggle}
            />
          }
          right={
            <div>
              estatisticas{" "}
              <LineChart
                color={colors[0]}
                title="saudavel"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
              />
              <LineChart
                color={colors[1]}
                title="nao tao saudavel"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
              />
              <LineChart
                color={colors[2]}
                title="limpeza"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
              />
              <LineChart
                color={colors[3]}
                title="outros"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
              />
              <div style={{ marginTop: 12 }}>
                <h2 style={{ fontWeight: 400, fontSize: 12, color: "#00364A" }}>
                  previsão de gastos:
                </h2>
                <div style={{ fontSize: 24 }}>
                  {totalPrice.toLocaleString("pt-br", {
                    minimunFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}
