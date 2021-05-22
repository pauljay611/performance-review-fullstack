import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { Size, Theme } from "../types";
import Navbar, { Path } from "./Navbar";
import { useHistory } from "react-router-dom";

interface Props {
  paths: Path[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d6d2c7;
  padding: 0 1%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Header: React.FC<Props> = ({ paths }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <Left>
        <Text
          text="PayPay Performance Review"
          sizeType={Size.L}
          themeType={Theme.Main}
          style={{ marginRight: "5%", cursor: "pointer" }}
          onClick={handleClick}
        />
        <Navbar paths={paths} />
      </Left>
      <Right />
    </Wrapper>
  );
};

export default Header;
