import React from "react";
import styled from "styled-components";
import { BasStyleProps, Theme } from "../types";
import { color } from "../style/theme";

interface Props extends BasStyleProps {
  width?: string;
  height?: string;
  placeholder?: string;
  type?: string;
  handleChange?: (e: React.ChangeEvent) => void;
}

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const InputWrapper = styled.input.attrs<{
  type: string;
  theme: string;
  placeholder: string;
}>((props) => ({
  placeHolder: props.placeholder,
  type: props.type,
}))`
  width: 100%;
  height: 100%;
  border: none;
  border: 2px solid ${(props) => props.theme};
  padding: 1% 2%;
  :focus {
    outline: none !important;
    border: 2px solid ${(props) => props.theme};
    box-shadow: 0 0 2px ${(props) => props.theme};
  }
`;

const InputBox: React.FC<Props> = ({
  width = "100px",
  height = "100px",
  themeType = Theme.Main,
  style,
  handleChange,
  placeholder = "",
  type = "text",
}) => {
  return (
    <Wrapper width={width} height={height}>
      <InputWrapper
        onChange={handleChange}
        theme={color[themeType]}
        style={style}
        type={type}
        placeholder={placeholder}
      ></InputWrapper>
    </Wrapper>
  );
};

export default InputBox;
