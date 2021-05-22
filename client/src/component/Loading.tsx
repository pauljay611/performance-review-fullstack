import React from "react";
import Text from "./Text";
import { Size, Theme } from "../types";

const Loading: React.FC = () => {
  return (
    <div>
      <Text text="Loading..." sizeType={Size.L} themeType={Theme.Primary} />
    </div>
  );
};

export default Loading;
