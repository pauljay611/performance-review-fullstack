import React from "react";
import Modal from "./Modal";
import { Size, Theme } from "../types";
import Button from "./Button";
import TextBox from "./TextBox";
import styled from "styled-components";

interface Props {
  message: string;
  confirm: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const Alert: React.FC<Props> = ({ message, confirm }) => {
  return (
    <Modal title="Message">
      <Wrapper>
        <TextBox sizeType={Size.M} style={{ marginBottom: "5%" }}>
          {message}
        </TextBox>
        <Button
          themeType={Theme.Primary}
          buttonSizeType={Size.M}
          onClick={confirm}
        >
          Confirm
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default Alert;
