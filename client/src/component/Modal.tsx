import React from "react";
import styled from "styled-components";
import Portal from "./Portal";
import { Size, Theme } from "../types";
import Text from "./TextBox";
import { color } from "../style/theme";

interface Props {
  title: string;
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(40, 35, 45, 0.7);
  top: 0;
  backdrop-filter: blur(2px);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 30%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color[Theme.Main]};
  border-radius: 10px;
`;

const Body = styled.div`
  height: 90%;
`;

const Modal: React.FC<Props> = ({ title, children }) => {
  const rootEl = document.getElementById("app");
  return (
    <Portal element={rootEl}>
      <Wrapper>
        <ModalWrapper>
          <Header>
            <Text sizeType={Size.L} themeType={Theme.Light}>
              {title}
            </Text>
          </Header>
          <Body>{children}</Body>
        </ModalWrapper>
      </Wrapper>
    </Portal>
  );
};

export default Modal;
