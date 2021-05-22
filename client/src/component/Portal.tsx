import React from "react";
import { createPortal } from "react-dom";

type Props = {
  // it might be null while using dom selector
  element?: HTMLElement | null;
};

export const Portal: React.FC<Props> = ({ children, element }) =>
  createPortal(children, element ?? window.document.body);

export default Portal;
