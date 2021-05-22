import React from "react";
import { size, color } from "../style/theme";
import { Size, Theme } from "../types";
import styled from "styled-components";

interface Props {
  sizeType?: Size;
  themeType?: Theme;
  text?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const TextComp = styled.div<{ size: string; theme: string }>`
  color: ${(props) => props.theme};
  font-size: ${(props) => props.size};
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

const Text: React.FC<Props> = ({
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
