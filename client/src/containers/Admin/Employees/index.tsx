import React from "react";
import styled from "styled-components";

import TableBox from "../../../component/TableBox";
import Button from "../../../component/Button";
import { Size, Theme } from "../../../types";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const dataSource: (string | React.ReactNode)[][] = [
  [
    "1",
    "E",
    "??",
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Primary}>
        update
      </Button>
    </div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Error}>
        update
      </Button>
    </div>,
  ],
  [
    "2",
    "Paul",
    "26",
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Primary}>
        update
      </Button>
    </div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button buttonSizeType={Size.M} themeType={Theme.Error}>
        update
      </Button>
    </div>,
  ],
];

const header = ["key", "username", "name", "update", "delete"];

const Employee: React.FC = () => {
  console.log(1);
  return (
    <Wrapper>
      <Box>
        <TableBox width="80%" height="100%" data={dataSource} header={header} />
      </Box>
    </Wrapper>
  );
};

export default Employee;
