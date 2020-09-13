import React from "react";
import { Wrapper, ProgressBar } from "./LineChat.styles";

export default function LineChart({ title, percentage, color }) {
  return (
    <div>
      <Wrapper>
        <span>{title}</span>
        <ProgressBar percentage={percentage} color={color} />
      </Wrapper>
    </div>
  );
}
