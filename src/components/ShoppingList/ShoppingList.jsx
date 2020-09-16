import React from "react";

import Checkbox from "../../shared/Checkbox/Checkbox";

import { Wrapper, Title, Array } from "./ShoppingList.styles";
import { useSelector } from "react-redux";
import {
  selectSelectedProducts,
  selectAllProducts,
} from "../../store/Products/Products.selectors";

export default function ShoppingList({ title, displayOnlySelected, onToggle }) {
  const products = useSelector(
    displayOnlySelected ? selectSelectedProducts : selectAllProducts
  );

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
