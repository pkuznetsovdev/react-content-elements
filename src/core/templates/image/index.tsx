import React from "react";
import { ImageProps } from "./types";
import { WithContentTemplateElementProps } from "../../content-element";

export const Image = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tag,
  // TODO FAQ: How to fix ts
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  text,
  ...props
}: React.PropsWithChildren<ImageProps & WithContentTemplateElementProps>) => {
  return <img {...props} />;
};

Image.displayName = "CE.Image";
