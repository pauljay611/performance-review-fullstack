import React from "react";
import styled from "styled-components";
import Portal from "./Portal";
import { Size, Theme } from "../types";
import Text from "./TextBox";
import { color } from "../style/theme";

interface Props {
  title: string;
  closeModal: () => void;
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

const Modal: React.FC<Props> = ({ title, closeModal, children }) => {
  const rootEl = document.getElementById("app");
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    closeModal();
  };

  return (
    <Portal element={rootEl}>
      <Wrapper onClickCapture={handleClose}>
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
