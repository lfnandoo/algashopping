import React from "react";

import Checkbox from "../../shared/Checkbox/Checkbox";

import { Wrapper, Title, Array } from "./ShoppingList.styles";

export default function ShoppingList({ title, products, onToggle }) {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {products.map((product) => (
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked)}
          />
        ))}
      </Array>
    </Wrapper>
  );
}
