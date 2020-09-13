import React from "react";

import Checkbox from "../../shared/Checkbox/Checkbox";

import { Wrapper, Title, Array } from "./ShoppingList.styles";

export default function ShoppingList({ title }) {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
        <Checkbox value={true} title="Alface" />
      </Array>
    </Wrapper>
  );
}
