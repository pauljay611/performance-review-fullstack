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
import { updateUser } from "../../../store/users/actions";

interface Props {
  user: IUser;
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

const UpdateFormModal: React.FC<Props> = ({ user, closeModal }) => {
  const [updatedUser, setUpdatedUser] = useState<IUser>(user);
  const dispatch = useDispatch();

  const handleUpdateUser = useCallback(() => {
    dispatch(updateUser({ id: user.id, body: updatedUser }));
    window.location.reload();
  }, [updatedUser]);

  const handleUpdatedUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal title="Update Employee">
      <Form>
        <FormWrapper>
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="ID"
            themeType={Theme.Light}
            name="id"
            value={updatedUser.id}
            disabled
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="Username"
            themeType={Theme.Light}
            name="username"
            value={updatedUser.username}
            onChange={handleUpdatedUserChange}
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="name"
            name="name"
            value={updatedUser.name}
            themeType={Theme.Light}
            onChange={handleUpdatedUserChange}
          />
          <Input
            width="80%"
            height="50px"
            style={{ borderRadius: "10px" }}
            placeholder="password"
            name="password"
            type="password"
            value={updatedUser.password}
            themeType={Theme.Light}
            onChange={handleUpdatedUserChange}
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
            value={updatedUser.is_admin}
            themeType={Theme.Light}
            onChange={handleUpdatedUserChange}
          />
          <Button
            themeType={Theme.Primary}
            buttonSizeType={Size.M}
            onClick={handleUpdateUser}
          >
            Update
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

export default UpdateFormModal;
