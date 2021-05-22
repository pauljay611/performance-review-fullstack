import React, { useState } from "react";
import styled from "styled-components";

import TableBox from "../../../component/TableBox";
import Button from "../../../component/Button";
import { Size, Theme } from "../../../types";
import Modal from "../../../component/Modal";
import Form from "../../../component/Form";
import Input from "../../../component/InputBox";
import { useUser } from "../../../hooks/user";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 5% 5%;
`;

const dataSource: (string | React.ReactNode)[][] = [
  [
    "1",
    "E",
    "??",
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Primary}>
        update
      </Button>
    </div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Error}>
        update
      </Button>
    </div>,
  ],
  [
    "2",
    "Paul",
    "26",
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Primary}>
        update
      </Button>
    </div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Error}>
        update
      </Button>
    </div>,
  ],
];

const header = ["key", "username", "name", "update", "delete"];

const Employee: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { users, loading } = useUser();

  function renderModal() {
    if (!open) return null;
    return (
      <Modal title="Employee Details">
        <Form>
          <FormWrapper>
            <Input
              width="80%"
              height="50px"
              style={{ borderRadius: "10px" }}
              placeholder="Username"
              themeType={Theme.Light}
            />
            <Input
              width="80%"
              height="50px"
              style={{ borderRadius: "10px" }}
              placeholder="name"
              themeType={Theme.Light}
            />
            <Button themeType={Theme.Primary} buttonSizeType={Size.M}>
              Update
            </Button>
          </FormWrapper>
        </Form>
      </Modal>
    );
  }

  return (
    <Wrapper>
      {renderModal()}
      <Box>
        <TableBox
          width="80%"
          height="100%"
          data={dataSource}
          header={header}
          themeType={Theme.Main}
        />
      </Box>
    </Wrapper>
  );
};

export default Employee;
