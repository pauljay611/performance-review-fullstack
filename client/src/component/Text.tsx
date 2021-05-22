import React from "react";
import { size, color } from "../style/theme";
import { Size, Theme, BasStyleProps } from "../types";
import styled from "styled-components";

export const TextComp = styled.div<{ size: string; theme: string }>`
  color: ${(props) => props.theme};
  font-size: ${(props) => props.size};
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

const Text: React.FC<BasStyleProps> = ({
  sizeType = Size.S,
  themeType = Theme.Normal,
  text = "",
  style,
  onClick,
}) => {
  return (
    <TextComp
      size={size[sizeType]}
      theme={color[themeType]}
      style={style}
      onClick={onClick}
    >
      {text}
    </TextComp>
  );
};

export default Text;
