import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TableBox from "../../../component/TableBox";
import Button from "../../../component/Button";
import { Size, Theme, IUser } from "../../../types";
import Modal from "../../../component/Modal";
import Form from "../../../component/Form";
import Input from "../../../component/InputBox";
import { useUser, useUsers } from "../../../hooks/user";
import { useDispatch } from "react-redux";
import { addUser, fetchAllUsers } from "../../../store/users/actions";
import TextBox from "../../../component/TextBox";
import UpdateFormModal from "./UpdateFormModal";
import CreateFormModal from "./CreateFormModal";

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
  user: IUser;
}

const TableButton: React.FC<TableProps> = ({ theme, text, user }) => {
  const [openUpdate, setOpenUpdate] = useState(false);

  const openUpdateModal = () => {
    setOpenUpdate(true);
  };

  const closeUpdateModal = () => {
    setOpenUpdate(false);
  };

  function renderUpdateModal() {
    if (!openUpdate) return null;
    return <UpdateFormModal user={user} closeModal={closeUpdateModal} />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {renderUpdateModal()}
      <Button
        buttonSizeType={Size.M}
        themeType={theme}
        onClick={openUpdateModal}
      >
        {text}
      </Button>
    </div>
  );
};

const newDefaultUser: Omit<IUser, "id"> = {
  username: "",
  name: "",
  password: "",
  user_id: uuidv4(),
  is_admin: false,
};

const Employee: React.FC = () => {
  const [openNew, setOpenNew] = useState(false);
  const { users = [], loading } = useUsers();

  const data = users.map((user) => {
    return [
      user.id,
      user.username,
      user.name,
      <TableButton theme={Theme.Warning} text="update" user={user} />,
      <TableButton theme={Theme.Dangerous} text="delete" user={user} />,
    ];
  });

  const closeNewModal = () => {
    setOpenNew(false);
  };

  const openNewModal = () => {
    setOpenNew(true);
  };

  function renderCreateModal() {
    if (!openNew) return null;
    return <CreateFormModal user={newDefaultUser} closeModal={closeNewModal} />;
  }

  if (loading) return null;

  return (
    <Wrapper>
      {renderCreateModal()}
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
          onClick={openNewModal}
        >
          +
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Employee;
