import React from "react";
import { BlockProps } from "./types";
import { WithContentTemplateElementProps } from "../../content-element";

export const Block = ({
  children,
  tag: TagName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  content,
  ...props
}: BlockProps & WithContentTemplateElementProps) => {
  return (
    // TODO: FIX TS contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>{children}</TagName>
  );
};

Block.displayName = "CE.Block";
