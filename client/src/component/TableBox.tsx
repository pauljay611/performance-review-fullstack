import React from "react";
import styled, { keyframes } from "styled-components";

import { BasStyleProps, Theme } from "../types";
import { color } from "../style/theme";

interface Props extends BasStyleProps {
  width?: string;
  height?: string;
  tHeight?: string;
  data: (string | React.ReactNode)[][];
  header: string[];
}

const Wrapper = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const TableWrapper = styled.table`
  width: 100%;
  height: 100%;
`;

const THead = styled.thead<{ theme: string }>`
  background-color: ${(props) => props.theme};
`;

const TH = styled.th<{ tHeight: string }>`
  height: ${(props) => props.tHeight};
  line-height: ${(props) => props.tHeight};
  color: #fff;
`;

const TD = styled.td<{ tHeight: string; theme: string }>`
  height: ${(props) => props.tHeight};
  line-height: ${(props) => props.tHeight};
  text-align: center;
  color: ${(props) => props.theme};
`;

const TableBox: React.FC<Props> = ({
  width = "200px",
  height = "200px",
  tHeight = "50px",
  themeType = Theme.Main,
  data = [],
  header,
}) => {
  return (
    <Wrapper width={width} height={height}>
      <TableWrapper>
        <THead theme={color[themeType]}>
          <tr>
            {header.map((head) => (
              <TH tHeight={tHeight}>{head}</TH>
            ))}
          </tr>
        </THead>
        <tbody>
          {data.map((item) => (
            <tr>
              {item.map((name) => (
                <TD tHeight={tHeight} theme={color[themeType]}>
                  {name}
                </TD>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </Wrapper>
  );
};

export default TableBox;
