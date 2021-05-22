import React from "react";
import Text from "./TextBox";
import { Size, Theme } from "../types";

const Loading: React.FC = () => {
  return (
    <div>
      <Text sizeType={Size.L} themeType={Theme.Primary}>
        Loading...
      </Text>
    </div>
  );
};

export default Loading;
