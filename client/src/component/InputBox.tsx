import React from "react";
import styled from "styled-components";
import { BasStyleProps, Theme } from "../types";
import { color } from "../style/theme";

interface Props extends BasStyleProps {
  width?: string;
  height?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 1%;
`;

const InputWrapper = styled.input.attrs<{
  type: string;
  theme: string;
  placeholder: string;
  value: string;
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
  onChange,
  value,
  placeholder = "",
  type = "text",
  name,
  disabled,
}) => {
  return (
    <Wrapper width={width} height={height}>
      <InputWrapper
        onChange={onChange}
        theme={color[themeType]}
        style={style}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        disabled={disabled}
      ></InputWrapper>
    </Wrapper>
  );
};

export default InputBox;
