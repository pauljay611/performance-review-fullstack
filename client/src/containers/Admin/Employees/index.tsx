import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TableBox from "../../../component/TableBox";
import Button from "../../../component/Button";
import { Size, Theme, IUser } from "../../../types";
import { useUsers } from "../../../hooks/useUser";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/users/actions";
import UpdateFormModal from "./UpdateFormModal";
import CreateFormModal from "./CreateFormModal";
import Alert from "../../../component/Alert";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0;
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: scroll;
`;

const header = ["key", "username", "name", "update", "delete"];

interface TableProps {
  theme: Theme;
  text: string;
  user: IUser;
}

const TableUpdateButton: React.FC<TableProps> = ({ theme, text, user }) => {
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

const TableDeleteButton: React.FC<TableProps> = ({ theme, text, user }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setOpen(true);
  };

  const confirm = () => {
    dispatch(deleteUser({ id: user.id }));
    window.location.reload();
  };

  function renderUpdateModal() {
    if (!open) return null;
    return (
      <Alert message={`Delete User ${user.username} ??`} confirm={confirm} />
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {renderUpdateModal()}
      <Button buttonSizeType={Size.M} themeType={theme} onClick={openModal}>
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
      <TableUpdateButton theme={Theme.Warning} text="update" user={user} />,
      <TableDeleteButton theme={Theme.Dangerous} text="delete" user={user} />,
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
      </Box>
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
    </Wrapper>
  );
};

export default Employee;
