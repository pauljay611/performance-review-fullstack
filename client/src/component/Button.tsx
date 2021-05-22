import React from "react";
import styled from "styled-components";

import { BasStyleProps, Size, Theme } from "../types";
import { size, color, buttonSize } from "../style/theme";

interface Props extends BasStyleProps {
  buttonSizeType?: Size;
  color?: string;
}

export const ButtonComp = styled.div<{
  size: string;
  theme: string;
  width: string;
  height: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme};
  color: #fff;
  font-size: ${(props) => props.size};
  font-weight: 500;
  border-radius: 10px;
  padding: 2%;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<Props> = ({
  sizeType = Size.S,
  buttonSizeType = Size.S,
  themeType = Theme.Normal,
  style,
  onClick,
  children,
}) => {
  return (
    <ButtonComp
      size={size[sizeType]}
      width={buttonSize[buttonSizeType].width}
      height={buttonSize[buttonSizeType].height}
      theme={color[themeType]}
      style={style}
      onClick={onClick}
    >
      {children}
    </ButtonComp>
  );
};

export default Button;
