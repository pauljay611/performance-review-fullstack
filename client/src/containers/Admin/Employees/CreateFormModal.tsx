import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Modal from "../../../component/Modal";

import Form from "../../../component/Form";

import { Theme, Size } from "../../../types";

import TextBox from "../../../component/TextBox";

import Button from "../../../component/Button";
import Input from "../../../component/InputBox";
import { IUser } from "../../../types";
import { addUser } from "../../../store/users/actions";

interface Props {
  user: Omit<IUser, "id">;
  closeModal: () => void;
}

const FormWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 5% 5%;
`;

const CreateFormModal: React.FC<Props> = ({ closeModal, user }) => {
  const [newUser, setUser] = useState<Omit<IUser, "id">>(user);
  const dispatch = useDispatch();
  const handleAddUser = useCallback(() => {
    dispatch(addUser(newUser));
    window.location.reload();
  }, [newUser]);

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            onClick={closeModal}
          >
            Close
          </Button>
        </FormWrapper>
      </Form>
    </Modal>
  );
};

export default CreateFormModal;
