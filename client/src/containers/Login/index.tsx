import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Cookies from "js-cookie";

import InputBox from "../../component/InputBox";
import { Size, Theme } from "../../types";
import Text from "../../component/TextBox";
import Button from "../../component/Button";
import { loginAPI } from "../../services/api";
import Alert from "../../component/Alert";
import { usePageGuard } from "../../hooks/usePageGuard";
import { useUser } from "../../hooks/useUser";

const Box = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser, loading } = useUser();
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (currentUser) {
      const defaultPath = currentUser.is_admin ? "/admin" : "/employee";
      history.push(defaultPath);
    }
  }, [loading, currentUser]);

  const handleClick = useCallback(() => {
    loginAPI({ username, password })
      .then((res) => {
        Cookies.set("token", res.token);
        window.location.reload();
      })
      .catch((error) => {
        setErrorMsg("Username or email not matched");
        setOpen(true);
      });
  }, [username, password]);

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const closeModal = () => {
    setOpen(false);
  };

  function renderModal() {
    if (!open) return;
    return <Alert message={errorMsg} confirm={closeModal} />;
  }

  return (
    <Wrapper>
      {renderModal()}
      <Box>
        <Text sizeType={Size.L} themeType={Theme.Main} onClick={handleClick}>
          PayPay Performance Review
        </Text>
        <InputBox
          width="300px"
          height="40px"
          sizeType={Size.M}
          themeType={Theme.Light}
          placeholder="Username"
          onChange={handleUsername}
        />
        <InputBox
          width="300px"
          height="40px"
          sizeType={Size.M}
          themeType={Theme.Light}
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <Button
          themeType={Theme.Primary}
          buttonSizeType={Size.M}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Login
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Login;
