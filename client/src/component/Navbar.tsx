import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { Size, Theme } from "../types";
import { color } from "../style/theme";
import { useHistory } from "react-router-dom";

export interface Path {
  name: string;
  path: string | string[];
}

interface Props {
  paths: Path[];
}

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-right: 10%;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid ${color[Theme.Main]};
  }
`;

const Navbar: React.FC<Props> = ({ paths }) => {
  const history = useHistory();

  const handleClick = (path: string) => () => {
    history.push(path);
  };

  return (
    <Wrapper>
      {paths.map(({ path, name }) => (
        <Item onClick={handleClick(Array.isArray(path) ? path[0] : path)}>
          <Text sizeType={Size.M}>{name}</Text>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Navbar;
