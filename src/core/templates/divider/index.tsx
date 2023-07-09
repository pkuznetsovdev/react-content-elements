import React from "react";
import { DividerProps } from "./types";
import { WithContentTemplateElementProps } from "../../content-element";

export const Divider = ({
  className,
}: DividerProps & WithContentTemplateElementProps) => {
  return <hr className={className} />;
};

Divider.displayName = "CE.Divider";
