import React from "react";
import LineChart from "../../shared/LineChart/LineChart";
import AppContainer from "../AppContainer/AppContainer";
import AppHeader from "../AppHeader/AppHeader";
import ShoppingList from "../ShoppingList/ShoppingList";
import { Wrapper, Container } from "./App.styles";
import productsMock from "../../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";

export default function App() {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#004D61"];

  const [products, setProducts] = React.useState(productsMock.products);
  const [selectedProducts, setSelectedProducts] = React.useState([]);

  React.useEffect(() => {
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  function handleToggle(id, checked) {
    const newProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(newProducts);
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
              products={selectedProducts}
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
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}
