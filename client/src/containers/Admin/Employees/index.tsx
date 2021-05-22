import React, { useState, useEffect } from "react";
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
  position: "relative";
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

const header = ["key", "username", "name", "update", "delete"];

interface TableProps {
  theme: Theme;
  text: string;
}

const TableButton: React.FC<TableProps> = ({ theme, text }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={theme}>
        text
      </Button>
    </div>
  );
};

const Employee: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { users, loading } = useUser();

  const data = users.map((user) => {
    return [
      user.id,
      user.username,
      user.name,
      <TableButton theme={Theme.Warning} text="update" />,
      <TableButton theme={Theme.Dangerous} text="delete" />,
    ];
  });

  const closeModal = () => {
    setOpen(false);
  };

  function renderModal() {
    if (!open) return null;
    return (
      <Modal title="Employee Details" closeModal={closeModal}>
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

  if (loading) return null;

  return (
    <Wrapper>
      {renderModal()}
      <Box>
        <TableBox
          width="80%"
          height="100%"
          data={data}
          header={header}
          themeType={Theme.Main}
          tHeight="60px"
        />
        <Button
          themeType={Theme.Primary}
          buttonSizeType={Size.S}
          sizeType={Size.M}
          style={{
            position: "absolute",
            bottom: "100px",
            right: "10%",
            borderRadius: "50%",
          }}
        >
          +
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Employee;
