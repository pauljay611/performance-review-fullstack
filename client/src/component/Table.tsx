import React from "react";

import { BasStyleProps, Theme } from "../types";
import { color } from "../style/theme";

interface Props extends BasStyleProps {
  width?: string;
  height?: string;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent) => void;
}

const Table: React.FC<Props> = () => {
  return <div></div>;
};

export default Table;
