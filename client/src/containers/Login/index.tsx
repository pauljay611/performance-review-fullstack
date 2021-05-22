import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputBox from "../../component/InputBox";
import { Size, Theme } from "../../types";
import Text from "../../component/Text";
import Button from "../../component/Button";

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
  const history = useHistory();

  function handleClick() {
    history.push("/admin");
  }

  return (
    <Wrapper>
      <Box>
        <Text
          text="PayPay Performance Review"
          sizeType={Size.L}
          themeType={Theme.Main}
          onClick={handleClick}
        />
        <InputBox
          width="300px"
          height="40px"
          sizeType={Size.M}
          themeType={Theme.Light}
          placeholder="Username"
        />
        <InputBox
          width="300px"
          height="40px"
          sizeType={Size.M}
          themeType={Theme.Light}
          placeholder="Password"
        />
        <Button
          themeType={Theme.Primary}
          text="Login"
          buttonSizeType={Size.M}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        ></Button>
      </Box>
    </Wrapper>
  );
};

export default Login;
