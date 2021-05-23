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
  const [newUser, setUser] = useState<Omit<IUser, "id">>(newDefaultUser);
  const dispatch = useDispatch();
  const handleAddUser = useCallback(() => {
    dispatch(addUser(newUser));
    window.location.reload();
  }, [newUser]);

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  function renderModal() {
    if (!openNew) return null;
    return (
      <Modal title="New Employee">
        <Form>
          <FormWrapper>
            <Input
              width="80%"
              height="50px"
              style={{ borderRadius: "10px" }}
              placeholder="Username"
              themeType={Theme.Light}
              name="username"
              value={newUser.username}
              onChange={handleNewUserChange}
            />
            <Input
              width="80%"
              height="50px"
              style={{ borderRadius: "10px" }}
              placeholder="name"
              name="name"
              value={newUser.name}
              themeType={Theme.Light}
              onChange={handleNewUserChange}
            />
            <Input
              width="80%"
              height="50px"
              style={{ borderRadius: "10px" }}
              placeholder="password"
              name="password"
              value={newUser.password}
              themeType={Theme.Light}
              onChange={handleNewUserChange}
            />
            <TextBox
              style={{ width: "80%", textAlign: "center" }}
              sizeType={Size.S}
            >
              Is admin ????
            </TextBox>
            <Input
              width="80%"
              height="20px"
              style={{ borderRadius: "10px" }}
              placeholder="admin"
              name="is_admin"
              type="checkBox"
              value={newUser.is_admin}
              themeType={Theme.Light}
              onChange={handleNewUserChange}
            />
            <Button
              themeType={Theme.Primary}
              buttonSizeType={Size.M}
              onClick={handleAddUser}
            >
              Add
            </Button>
            <Button
              themeType={Theme.Dangerous}
              buttonSizeType={Size.M}
              onClick={closeNewModal}
            >
              Close
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
          onClick={openNewModal}
        >
          +
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Employee;
