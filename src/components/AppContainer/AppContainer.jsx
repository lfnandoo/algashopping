import React from "react";

import { Wrapper } from "./AppContainer.styles";

export default function AppContainer({ left, right, middle }) {
  return (
    <Wrapper>
      <div>{left}</div>
      <div>{right}</div>
      <div>{middle}</div>
    </Wrapper>
  );
}
