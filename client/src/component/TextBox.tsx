import React from "react";
import { size, color } from "../style/theme";
import { Size, Theme, BasStyleProps } from "../types";
import styled from "styled-components";

export const TextWrapper = styled.div<{ size: string; theme: string }>`
  color: ${(props) => props.theme};
  font-size: ${(props) => props.size};
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

const TextBox: React.FC<BasStyleProps> = ({
  sizeType = Size.S,
  themeType = Theme.Normal,
  style,
  onClick,
  children,
}) => {
  return (
    <TextWrapper
      size={size[sizeType]}
      theme={color[themeType]}
      style={style}
      onClick={onClick}
    >
      {children}
    </TextWrapper>
  );
};

export default TextBox;
